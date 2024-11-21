// To keep track of what python functions are already initalized so the code is already generated.
window.PythonConfig =
    {
        ros_initalized: false,
        movebot_sec: false,
        turnbot_sec: false,
        get_odom: false,
        movebot_distance: false,
        quat_to_angle: false,
        normalize_angle: false,
        get_odomRotate: false,
        turnbot_degree: false,
        sleepbot_sec: false,
        safeMovement: false,
        safe_movebot_sec: false,
        safe_movebot_distance: false,
        scanner_data: false,
        scanner_data_range: false,
        scanner_data_check: false,
        stop_bot: false,
        load_xml: false,
    };

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
    if (!window.PythonConfig.ros_initialized) {
        Blockly.Python.definitions_['rospy'] = 'import rospy';
        Blockly.Python.definitions_['geometry_msgs'] = 'import geometry_msgs.msg as geometry_msgs';
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/python_initialization.py");
        code += "\n\n";
        window.PythonConfig.ros_initialized = true;
    }
    return code
};

Blockly.PHP['print_r'] = function(block) {
    var value_print_r = Blockly.PHP.valueToCode(block, 'print_r', Blockly.PHP.ORDER_NONE) || '\'\'';
    var code = 'print_r(' + value_print_r + ');\n';
    return code;
};

Blockly.Python['print_r'] = function(block) {
    var value_print_r = Blockly.Python.valueToCode(block, 'print_r', Blockly.Python.ORDER_NONE) || '\'\'';
    Blockly.Python.definitions_['pprint'] = 'from pprint import pprint';
    var code = 'pprint(' + value_print_r + ')\n';
    return code;
};

Blockly.PHP['tag_br'] = function(block) {
    var code = 'echo "<br />";\n';
    return code;
};

Blockly.Python['tag_br'] = function(block) {
    var code = 'print()\n';
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

Blockly.Python['loop_controller'] = function(block) {
    var dropdown_cntrol = block.getFieldValue('cntrol');
    if (dropdown_cntrol == "break") {
        var code = "break\n";
    } else if (dropdown_cntrol == "continue") {
        var code = "continue\n";
    }
    return code;
}

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

Blockly.Python['load_xml'] = function(block) {
    Blockly.Python.definitions_['elementtree'] = 'import xml.etree.ElementTree as ET';
    var value_xml = Blockly.Python.valueToCode(block, 'xml', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.load_xml) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/load_xml.py");
        window.PythonConfig.load_xml = true;
    }
    code += '"""Starting the operation load_xml."""\n';
    code += 'load_xml(' + value_xml + ')\n\n';
    return code;
};

Blockly.PHP['sleep_time'] = function(block) {
    var value_sleep = Blockly.PHP.valueToCode(block, 'sleep', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'sleep(' + value_sleep + ');\n';
    return code;
};

Blockly.Python['sleep_time'] = function(block) {
    Blockly.Python.definitions_['time'] = 'import time';
    var value_sleep = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = 'time.sleep(' + value_sleep + ')\n';
    return code;
}

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
    Blockly.Python.definitions_['time'] = 'import time';
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.movebot_sec) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/movebot_sec.py");
        window.PythonConfig.movebot_sec = true;
    }
    code += '"""Starting the operation movebot_second."""\n';
    code += 'movebot_second(' + dropdown_direction + ', ' + value_second + ', ' + dropdown_speed + ')\n\n';
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
    Blockly.Python.definitions_['time'] = 'import time';
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.turnbot_sec) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/turnbot_sec.py");
        window.PythonConfig.turnbot_sec = true;
    }
    code += '"""Starting the operation turnbot_second."""\n';
    code += 'turnbot_second(' + dropdown_rotation + ', ' + value_second + ', ' + dropdown_speed + ')\n\n';
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
    Blockly.Python.definitions_['time'] = 'import time';
    var dropdown_direction = block.getFieldValue('direction');
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC) || '0';
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.safeMovement) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/safeMovement.py");
        window.PythonConfig.safeMovement = true;
    }
    if (!window.PythonConfig.turnbot_degree) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/turnbot_degree.py");
        window.PythonConfig.turnbot_degree = true;
    }
    if (!window.PythonConfig.safe_movebot_sec) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/safe_movebot_sec.py");
        window.PythonConfig.safe_movebot_sec = true;
    }
    code += '"""Starting the operation safe_movebot_second."""\n';
    code += 'safe_movebot_second(' + dropdown_direction + ',' + value_second + ',' + dropdown_speed + ')\n\n';
    return code;
}

Blockly.PHP['movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'movebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['movebot_dis'] = function(block) {
    Blockly.Python.definitions_['tf'] = 'import tf';
    Blockly.Python.definitions_['math'] = 'import math';
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.get_odom) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/get_odom.py");
        window.PythonConfig.get_odom = true;
    }
    if (!window.PythonConfig.movebot_distance) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/movebot_distance.py");
        window.PythonConfig.movebot_distance = true;
    }
    code += '"""Starting the operation movebot_distance."""\n';
    code += 'movebot_distance(' + dropdown_direction + ', ' + value_distance + ', ' + dropdown_speed + ')\n\n';
    return code;
};

Blockly.PHP['turnbot_deg'] = function(block) {
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_degree = Blockly.PHP.valueToCode(block, 'degree', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'turnbot_degree(' + dropdown_rotation + ',' + value_degree + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['turnbot_deg'] = function(block) {
    Blockly.Python.definitions_['tf'] = 'import tf';
    Blockly.Python.definitions_['math'] = 'import math';
    Blockly.Python.definitions_['PyKDL'] = 'import PyKDL';
    var dropdown_rotation = block.getFieldValue('rotation');
    var value_degree = Blockly.Python.valueToCode(block, 'degree', Blockly.Python.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.quat_to_angle) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/quat_to_angle.py");
        window.PythonConfig.quat_to_angle = true;
    }
    if (!window.PythonConfig.normalize_angle) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/normalize_angle.py");
        window.PythonConfig.normalize_angle = true;
    }
    if (!window.PythonConfig.get_odomRotate) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/get_odomRotate.py");
        window.PythonConfig.get_odomRotate = true;
    }
    if (!window.PythonConfig.turnbot_degree) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/turnbot_degree.py");
        window.PythonConfig.turnbot_degree = true;
    }
    code += '"""Starting the operation turnbot_degree."""\n';
    code += 'turnbot_degree(' + dropdown_rotation + ',' + value_degree + ',' + dropdown_speed + ')\n\n';
    return code;
};

Blockly.PHP['safe_movebot_dis'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');
    var code = 'safeMovebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ');\n';
    return code;
};

Blockly.Python['safe_movebot_dis'] = function(block) {
    Blockly.Python.definitions_['tf'] = 'import tf';
    Blockly.Python.definitions_['math'] = 'import math';
    var dropdown_direction = block.getFieldValue('direction');
    var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
    var dropdown_speed = block.getFieldValue('speed');

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.get_odom) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/get_odom.py");
        window.PythonConfig.get_odom = true;
    }
    if (!window.PythonConfig.safeMovement) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/helper_functions/safeMovement.py");
        window.PythonConfig.safeMovement = true;
    }
    if (!window.PythonConfig.turnbot_degree) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/turnbot_degree.py");
        window.PythonConfig.turnbot_degree = true;
    }
    if (!window.PythonConfig.safe_movebot_distance) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/safe_movebot_distance.py");
        window.PythonConfig.safe_movebot_distance = true;
    }
    code += '"""Starting the operation safe_movebot_distance."""\n';
    code += 'safe_movebot_distance(' + dropdown_direction + ',' + value_distance + ',' + dropdown_speed + ')\n\n';
    return code;
};

Blockly.PHP['sleep_bot'] = function(block) {
    var value_second = Blockly.PHP.valueToCode(block, 'second', Blockly.PHP.ORDER_ATOMIC);
    var code = 'sleep_robot(' + value_second + ');\n';
    return code;
};

Blockly.Python['sleep_bot'] = function(block) {
    var second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.sleepbot_sec) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/sleepbot_sec.py");
        window.PythonConfig.sleepbot_sec = true;
    }
    code += '"""Starting the operation sleep_bot."""\n';
    code += 'sleepbot_sec(' + second + ')\n\n';
    return code;
};

Blockly.PHP['scanner_data'] = function(block) {
    var code = 'laser_scanner_data()';
    return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.Python['scanner_data'] = function(block) {
    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.scanner_data) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/scanner_data.py");
        window.PythonConfig.scanner_data = true;
    }
    code += '"""Starting the operation scanner_data."""\n';
    code += 'scanner_data()\n\n';
    return code
}

Blockly.PHP['scanner_data_range'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var code = 'laser_scanner_data_range('+ value_x_range + ',' + value_y_range + ')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.Python['scanner_data_range'] = function(block) {
    var value_x_range = Blockly.Python.valueToCode(block, 'x_range', Blockly.Python.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.Python.valueToCode(block, 'y_range', Blockly.Python.ORDER_ATOMIC) || '0';

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.scanner_data_range) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/scanner_data_range.py");
        window.PythonConfig.scanner_data_range = true;
    }
    code += '"""Starting the operation scanner_data_range."""\n';
    code += 'scanner_data_range('+ value_x_range + ',' + value_y_range + ')\n\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.PHP['scanner_data_check'] = function(block) {
    var value_x_range = Blockly.PHP.valueToCode(block, 'x_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.PHP.valueToCode(block, 'y_range', Blockly.PHP.ORDER_ATOMIC) || '0';
    var value_distance = Blockly.PHP.valueToCode(block, 'distance', Blockly.PHP.ORDER_ATOMIC) || '10';
    var code = 'laser_scanner_data_check(' + value_x_range + ',' + value_y_range + ',' + value_distance +')';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.Python['scanner_data_check'] = function(block) {
    var value_x_range = Blockly.Python.valueToCode(block, 'x_range', Blockly.Python.ORDER_ATOMIC) || '0';
    var value_y_range = Blockly.Python.valueToCode(block, 'y_range', Blockly.Python.ORDER_ATOMIC) || '0';
    var value_distance = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC) || '10';

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.scanner_data_check) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/scanner_data_check.py");
        window.PythonConfig.scanner_data_check = true;
    }
    code += '"""Starting the operation scanner_data_check."""\n';
    code += 'scanner_data_check(' + value_x_range + ',' + value_y_range + ',' + value_distance +')\n\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.PHP['stop_bot'] = function(block) {
    var code = 'stop_robot();\n';
    return code;
};

Blockly.Python['stop_bot'] = function(block) {
    Blockly.Python.definitions_['time'] = 'import time';

    var code = "";
    code = ros_python_initialization(code);
    if (!window.PythonConfig.stop_bot) {
        code += Blockly.readPythonFile("../generators/python/scripts/turtlebot3/blocks/stop_bot.py");
        window.PythonConfig.stop_bot = true;
    }
    code += '"""Starting the operation stop_robot."""\n';
    code += 'stop_robot()\n\n';
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

