window.ros_initialized = false;

Blockly.readPythonFile = function(file) {
    var rawFile = new XMLHttpRequest();
    var code = "";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                code = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return code;
};

function ros_python_initialization (code) {
    if (!window.ros_initialized) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/movebot_init.py");
        window.ros_initialized = true;
    }
    return code
}

function ros_python_method_initialization (code, rospy_rate) {
    code += 'rospy.Rate(' + rospy_rate + ')\n'
    code += 'twist = Twist()\n'
    code += 'start = time.time()\n'
    code += 'flag = True\n'
    return code
}

Blockly.PHP['print_r'] = function(block) {
    var value_print_r = Blockly.PHP.valueToCode(block, 'print_r', Blockly.PHP.ORDER_NONE) || '\'\'';
    var code = 'print_r(' + value_print_r + ');\n';
    return code;
};

Blockly.PHP['tag_br'] = function(block) {
    var code = 'echo "<br />";\n';
    return code;
};

Blockly.PHP['loop_controller'] = function(block) {
    var dropdown_cntrol = block.getFieldValue('cntrol');
    if (dropdown_cntrol == "break") {
        var code = "break;\n";
    } else if (dropdown_cntrol == "continue") {
        var code = "continue;\n";
    }
    return code;
};

Blockly.PHP['foreach_simple'] = function(block) {
    var branch = Blockly.PHP.statementToCode(block, 'DO');
    branch = Blockly.PHP.addLoopTrap(branch, block.id);
    var code = '';
    code += 'foreach($BAALL as $item) {\n' + branch + '}\n';
    return code;
};

Blockly.PHP['load_xml'] = function(block) {
    var value_xml = Blockly.PHP.valueToCode(block, 'xml', Blockly.PHP.ORDER_ATOMIC);
    var code = 'load_xml(' + value_xml + ');\n';
    return code;
};

Blockly.PHP['sleep_time'] = function(block) {
    var value_sleep = Blockly.PHP.valueToCode(block, 'sleep', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleep(' + value_sleep + ');\n';
    return code;
};

Blockly.PHP['repeat_list'] = function(block) {
    var value_item = Blockly.PHP.valueToCode(block, 'item', Blockly.PHP.ORDER_ATOMIC) || "null";
    var value_num = Blockly.PHP.valueToCode(block, 'num', Blockly.PHP.ORDER_ATOMIC);
    var code = 'repeat_list(' + value_item + ',' + value_num + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['length_list'] = function(block) {
    var value_length = Blockly.PHP.valueToCode(block, 'length', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    var code = 'length(' + value_length + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['indexof_list'] = function(block) {
    var value_list = Blockly.PHP.valueToCode(block, 'list', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_loc = block.getFieldValue('loc');
    var value_value = Blockly.PHP.valueToCode(block, 'value', Blockly.PHP.ORDER_ATOMIC) || '\'\'';
    if (dropdown_loc === "first") {
        var code = 'list_firstIndexOf(' + value_list + ',' + value_value + ')';
    } else if (dropdown_loc === "last") {
        var code = 'list_lastIndexOf(' + value_list + ',' + value_value + ')';
    }
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sort_list'] = function(block) {
    var dropdown_type = block.getFieldValue('type');
    var dropdown_direction = block.getFieldValue('direction');
    var value_list = Blockly.PHP.valueToCode(block, 'list', Blockly.PHP.ORDER_ATOMIC) || "array()";
    var code = 'sort_list(' + value_list + ',' + dropdown_type + ',' + dropdown_direction + ')';
    return [code, Blockly.PHP.ORDER_NONE];
};
//-----------------------------------------------------------------
//-------------------------Free Navigation-------------------------
//-----------------------------------------------------------------
Blockly.PHP['movebot_sec'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'movebot_second(' + dropdown_direction + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['movebot_sec'] = function(block) {
    var direction = block.getFieldValue('direction');
    var second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation movebot_sec."""\n';
    code = ros_python_method_initialization(code, '10');
    code += '\ntwist.linear.z = 0.00\n';
    if (speed === 0) {
        code += 'twist.linear.x = 0.00';
    }
    if (speed === "'slow'" && direction === "'Forward'") {
        code += 'twist.linear.x = 0.10';
    } else if (speed === "'normal'" && direction === "'Forward'") {
        code += 'twist.linear.x = 0.20';
    } else if (speed === "'fast'" && direction === "'Forward'") {
        code += 'twist.linear.x = 0.30';
    }
    if (speed === "'slow'" && direction === "'Backward'") {
        code += 'twist.linear.x = -0.10';
    } else if (speed === "'normal'" && direction === "'Backward'") {
        code += 'twist.linear.x = -0.20';
    } else if (speed === "'fast'" && direction === "'Backward'") {
        code += 'twist.linear.x = -0.30';
    }
    code += '\nsecond = ' + second.toString() + '\n\n';
    code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/movebot_run.py");
    return code;
};

Blockly.PHP['turnbot_sec'] = function(block) {
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'turnbot_second(' + dropdown_rotation + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['turnbot_sec'] = function(block) {
    var rotation = block.getFieldValue('rotation');
    var second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation turnbot_sec."""\n';
    code = ros_python_method_initialization(code, '10');
    code += '\ntwist.linear.x = 0.00\n';
    code += 'twist.linear.y = 0.00\n';
    code += 'twist.linear.z = 0.00\n';
    code += 'twist.angular.x = 0.00\n';
    code += 'twist.angular.y = 0.00\n';
    if (speed === 0) {
        code += 'twist.angular.z = 0.00';
    }
    if (speed === "'slow'" && rotation === "'Right'") {
        code += 'twist.angular.z = -0.10';
    } else if (speed === "'normal'" && rotation === "'Right'") {
        code += 'twist.angular.z = -0.25';
    } else if (speed === "'fast'" && rotation === "'Right'") {
        code += 'twist.angular.z = -0.75';
    }
    if (speed === "'slow'" && rotation === "'Left'") {
        code += 'twist.angular.z = 0.10';
    } else if (speed === "'normal'" && rotation === "'Left'") {
        code += 'twist.angular.z = 0.25';
    } else if (speed === "'fast'" && rotation === "'Left'") {
        code += 'twist.angular.z = 0.75';
    }
    code += '\nsecond = ' + second.toString() + '\n\n';
    code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/movebot_run.py");
    return code;
};

Blockly.PHP['safe_movebot_sec'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'safeMovebot_second(' + dropdown_direction + ',' + value_second + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['safe_movebot_sec'] = function(block) {
    var direction = block.getFieldValue('direction');
    var second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation safe_movebot_sec."""\n';
    code += 'raise NotImplementedError("This block is not implemented in Python yet!")';
    return code;
}

Blockly.PHP['movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'movebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['turnbot_deg'] = function(block) {
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'turnbot_degree(' + dropdown_rotation + ',' + value_degree + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['safe_movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'safeMovebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.PHP['sleep_bot'] = function(block) {
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var code = 'sleep_robot(' + value_second + ');\n';
    return code;
};

Blockly.Python['sleep_bot'] = function(block) {
    var second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation sleep_bot."""\n';
    code += '\nrospy.sleep(' + second + ')';
    return code;
};

Blockly.PHP['scanner_data'] = function(block) {
    var code = 'laser_scanner_data()';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.Python['scanner_data'] = function(block) {
    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation scanner_data."""\n';
    code += 'global ranges_filter, intensities_filter, ranges_scanner, intensities_scanner, ranges_scanner_total, intensities_scanner_total\n';
    code += 'ranges_scanner = list(ranges_scanner_total)\n';
    code += 'rospy.loginfo("#################" + str(ranges_scanner[10]) + "#################")\n';
    code += 'rospy.loginfo("#################" + str(len(ranges_scanner)) + "#################")\n\n';
    code += ''
    return code
}

Blockly.PHP['scanner_data_range'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'laser_scanner_data_range('+ value_x_range + ',' + value_y_range + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['scanner_data_check'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC) || '10';
    var code = 'laser_scanner_data_check(' + value_x_range + ',' + value_y_range + ',' + value_distance +')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['stop_bot'] = function(block) {
    var code = 'stop_robot();\n';
    return code;
};

Blockly.Python['stop_bot'] = function(block) {
    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation stop_bot."""\n';
    code = ros_python_method_initialization(code, '10');
    code += '\ntwist.linear.x = 0.00\n';
    code += 'twist.linear.y = 0.00\n';
    code += 'twist.linear.z = 0.00\n';
    code += 'twist.angular.x = 0.00\n';
    code += 'twist.angular.y = 0.00\n';
    code += 'twist.angular.z = 0.00\n';
    code += '\nsecond = 2\n\n';
    code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/movebot_run.py");
    code += '\nrospy.loginfo("*********************ROBOT STOPPED**************************")';
    return code;
}

//-----------------------------------------------------------------
//-------------------Map Navigation--------------------------------
//-----------------------------------------------------------------
Blockly.PHP['connect_server_ros'] = function(block) {
    var code = 'connect_server_ros()';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['movebot_link'] = function(block) {
    var value_meter = Blockly.PHP.valueToCode(block, 'meter', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'movebotMap_distance(' + value_meter + ');\n';
    return code;
};

Blockly.Python['movebot_link'] = function(block) {
    var distance = Blockly.PHP.valueToCode(block, 'meter', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation movebot_link."""\n';
    code += 'import actionlib\n';
    code += 'from move_base_msgs.msg import MoveBaseGoal, MoveBaseAction\n';
    code += 'from actionlib_msgs.msg import GoalStatus\n\n';
    code += 'rate = rospy.Rate(10)\n';
    code += 'distance = ' + distance + '\n';
    code += 'move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)\n';
    code += 'rospy.loginfo("wait for the action server to come up")\n';
    code += 'move_base.wait_for_server(rospy.Duration(5.0))\n\n';
    code += 'goal = MoveBaseGoal()\n';
    code += 'goal.target_pose.header.frame_id = "base_link"\n';
    code += 'goal.target_pose.header.stamp = rospy.Time.now()\n';
    code += 'goal.target_pose.pose.position.x = np.float64(distance)\n';
    code += 'goal.target_pose.pose.orientation.w = 1\n';
    code += 'move_base.send_goal(goal)\n';
    code += 'success = move_base.wait_for_result(rospy.Duration(60))\n\n';
    code += 'if not success:\n';
    code += '   move_base.cancel_goal()\n';
    code += '   rospy.loginfo(f"The base failed to move {str(distance)} meter forward")\n';
    code += '   return False\n';
    code += 'elif success:\n';
    code += '   state = move_base.get_state()\n'
    code += '   if state == GoalStatus.SUCCEEDED:\n';
    code += '       rospy.loginfo(f"The robot moved {str(distance)} meter forward")\n';
    return code
}

Blockly.PHP['turnbot_link'] = function(block) {
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'turnbotMap_degree(' + value_degree + ');\n';
    return code;
};

Blockly.Python['turnbot_link'] = function(block) {
    var degree = Blockly.Python.valueToCode(block, 'degree', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = "";
    code = ros_python_initialization(code);
    code += '\n\n"""Starting the operation movebot_link."""\n';
    code += 'import actionlib\n';
    code += 'from move_base_msgs.msg import MoveBaseGoal, MoveBaseAction\n';
    code += 'from actionlib_msgs.msg import GoalStatus\n\n';
    code += 'rate = rospy.Rate(10)\n';
    code += 'distance = ' + distance + '\n';
    code += 'move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)\n';
    code += 'rospy.loginfo("wait for the action server to come up")\n';
    code += 'move_base.wait_for_server(rospy.Duration(5.0))\n\n';
    code += 'goal = MoveBaseGoal()\n';
    code += 'goal.target_pose.header.frame_id = "base_link"\n';
    code += 'goal.target_pose.header.stamp = rospy.Time.now()\n';
    code += 'goal.target_pose.pose.position.x = np.float64(distance)\n';
    code += 'goal.target_pose.pose.orientation.w = 1\n';
    code += 'move_base.send_goal(goal)\n';
    code += 'success = move_base.wait_for_result(rospy.Duration(60))\n\n';
    code += 'if not success:\n';
    code += '   move_base.cancel_goal()\n';
    code += '   rospy.loginfo(f"The base failed to move {str(distance)} meter forward")\n';
    code += '   return False\n';
    code += 'elif success:\n';
    code += '   state = move_base.get_state()\n'
    code += '   if state == GoalStatus.SUCCEEDED:\n';
    code += '       rospy.loginfo(f"The robot moved {str(distance)} meter forward")\n';
    return code

}

Blockly.PHP['initialization_pose'] = function(block) {
    var code = 'initial_position();\n';
    return code;
};

Blockly.PHP['pose_change'] = function(block) {
    var value_x_tar = Blockly.PHP.valueToCode(block, 'x_tar', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_tar = Blockly.PHP.valueToCode(block, 'y_tar', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'change_initial_position(' + value_x_tar + ',' + value_y_tar + ',' + value_degree + ');\n';
    return code;
};

Blockly.PHP['start_position'] = function(block) {
    var code = 'movebot_to_start();\n';
    return code;
};

Blockly.PHP['movebot_location'] = function(block) {
    var dropdown_position = block.getFieldValue('position');
    var code = 'movebot_to_location(' + dropdown_position + ');\n';
    return code;
};

Blockly.PHP['movebot_position'] = function(block) {
    var value_x_goal = Blockly.PHP.valueToCode(block, 'x_goal', Blockly.PHP.ORDER_ATOMIC);
    var value_y_goal = Blockly.PHP.valueToCode(block, 'y_goal', Blockly.PHP.ORDER_ATOMIC);
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC);
    var code = 'movebot_to_position(' + value_x_goal + ',' + value_y_goal + ',' + value_degree + ');\n';
    return code;
};

Blockly.PHP['get_location'] = function(block) {
    var dropdown_values = block.getFieldValue('values');
    var code = 'current_location('+dropdown_values+')';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sleep_robot'] = function(block) {
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleepbot_map(' + value_second + ');\n';
    return code;
};

Blockly.PHP['stopbot_map'] = function(block) {
    var code = 'stopbot_map();\n';
    return code;
};
//-----------------------------------------------------------------
//---------------------For RaspberryPi-----------------------------
//-----------------------------------------------------------------
Blockly.PHP['raspy_arduino_write'] = function(block) {
    var value_number = Blockly.PHP.valueToCode(block, 'number', Blockly.PHP.ORDER_ATOMIC) || '0';
    var dropdown_port = block.getFieldValue('port');
    var dropdown_rate = block.getFieldValue('rate');
    var code = 'write_to_board(' + value_number + ',' + dropdown_port + ',' + dropdown_rate + ');\n';
    return code;
};

Blockly.PHP['raspy_arduino_read'] = function(block) {
    var dropdown_port = block.getFieldValue('port');
    var dropdown_rate = block.getFieldValue('rate');
    var code = 'read_from_board(' + dropdown_port + ',' + dropdown_rate + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['stopbot_link'] = function(block) {
    var code = 'stop_robot_link();\n';
    return code;
};

