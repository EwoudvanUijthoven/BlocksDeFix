//change the Block colors
function reColor(block, hue) {
    var oldInit = block.init;
    block.init = function() {
        oldInit.call(this);
        this.setColour(hue);
    }
}
//--------------------------------
let Logic_color = "#43A047";
let Loops_color = "#F44336";
let Math_color = "#FF9800";
let Text_color = "#AD1457";
let List_color = "#33691E";
let ProgramControl_color = "#0277BD";
let Variables_color = "#AFB42B";
let Functions_color = "#01579B";
let FreeNavigation_color = "#FF7043";
let MapNavigation_color = "#FF8A65";
let Arduino_color = "#00838F";

reColor(Blockly.Blocks['controls_if'], Logic_color);
reColor(Blockly.Blocks['controls_ifelse'], Logic_color);
reColor(Blockly.Blocks['logic_compare'], Logic_color);
reColor(Blockly.Blocks['logic_operation'], Logic_color);
reColor(Blockly.Blocks['logic_negate'], Logic_color);
reColor(Blockly.Blocks['logic_null'], Logic_color);
reColor(Blockly.Blocks['logic_boolean'], Logic_color);
reColor(Blockly.Blocks['logic_ternary'], Logic_color);
reColor(Blockly.Blocks['controls_if_if'], Logic_color);
reColor(Blockly.Blocks['controls_if_elseif'], Logic_color);
reColor(Blockly.Blocks['controls_if_else'], Logic_color);

reColor(Blockly.Blocks['controls_forEach'], Loops_color);
reColor(Blockly.Blocks['controls_repeat_ext'], Loops_color);
reColor(Blockly.Blocks['controls_for'], Loops_color);
reColor(Blockly.Blocks['controls_whileUntil'], Loops_color);
reColor(Blockly.Blocks['loop_controller'], Loops_color);
reColor(Blockly.Blocks['foreach_simple'], Loops_color);

reColor(Blockly.Blocks['math_number'], Math_color);
reColor(Blockly.Blocks['math_arithmetic'], Math_color);
reColor(Blockly.Blocks['math_single'], Math_color);
reColor(Blockly.Blocks['math_trig'], Math_color);
reColor(Blockly.Blocks['math_constant'], Math_color);
reColor(Blockly.Blocks['math_number_property'], Math_color);
reColor(Blockly.Blocks['math_round'], Math_color);
reColor(Blockly.Blocks['math_on_list'], Math_color);
reColor(Blockly.Blocks['math_modulo'], Math_color);
reColor(Blockly.Blocks['math_constrain'], Math_color);
reColor(Blockly.Blocks['math_random_int'], Math_color);
reColor(Blockly.Blocks['math_random_float'], Math_color);

reColor(Blockly.Blocks['text'], Text_color);
reColor(Blockly.Blocks['text_join'], Text_color);
reColor(Blockly.Blocks['text_append'], Text_color);
reColor(Blockly.Blocks['text_length'], Text_color);
reColor(Blockly.Blocks['text_isEmpty'], Text_color);
reColor(Blockly.Blocks['text_indexOf'], Text_color);
reColor(Blockly.Blocks['variables_get'], Text_color);
reColor(Blockly.Blocks['text_charAt'], Text_color);
reColor(Blockly.Blocks['text_getSubstring'], Text_color);
reColor(Blockly.Blocks['text_changeCase'], Text_color);
reColor(Blockly.Blocks['text_trim'], Text_color);
reColor(Blockly.Blocks['text_print'], Text_color);
reColor(Blockly.Blocks['text_prompt_ext'], Text_color);
reColor(Blockly.Blocks['text_create_join_container'], Text_color);
reColor(Blockly.Blocks['text_create_join_item'], Text_color);

reColor(Blockly.Blocks['lists_create_with'], List_color);
reColor(Blockly.Blocks['repeat_list'], List_color);
reColor(Blockly.Blocks['length_list'], List_color);
reColor(Blockly.Blocks['lists_isEmpty'], List_color);
reColor(Blockly.Blocks['indexof_list'], List_color);
reColor(Blockly.Blocks['variables_get'], List_color);
reColor(Blockly.Blocks['lists_getIndex'], List_color);
reColor(Blockly.Blocks['lists_setIndex'], List_color);
reColor(Blockly.Blocks['lists_getSublist'], List_color);
reColor(Blockly.Blocks['lists_split'], List_color);
reColor(Blockly.Blocks['sort_list'], List_color);
reColor(Blockly.Blocks['print_r'], List_color);
reColor(Blockly.Blocks['lists_create_with_item'], List_color);
reColor(Blockly.Blocks['lists_create_with_container'], List_color);

reColor(Blockly.Blocks['load_xml'], ProgramControl_color);
reColor(Blockly.Blocks['sleep_time'], ProgramControl_color);
reColor(Blockly.Blocks['tag_br'], ProgramControl_color);

reColor(Blockly.Blocks['variables_set'], Variables_color);
reColor(Blockly.Blocks['variables_get'], Variables_color);
reColor(Blockly.Blocks['math_change'], Variables_color);

reColor(Blockly.Blocks['procedures_defreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_defnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_ifreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorcontainer'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorarg'], Functions_color);

reColor(Blockly.Blocks['movebot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['movebot_dis'], FreeNavigation_color);
reColor(Blockly.Blocks['safe_movebot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['safe_movebot_dis'], FreeNavigation_color);
reColor(Blockly.Blocks['turnbot_sec'], FreeNavigation_color);
reColor(Blockly.Blocks['turnbot_deg'], FreeNavigation_color);
reColor(Blockly.Blocks['sleep_bot'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data_check'], FreeNavigation_color);
reColor(Blockly.Blocks['stop_bot'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data'], FreeNavigation_color);
reColor(Blockly.Blocks['scanner_data_range'], FreeNavigation_color);

reColor(Blockly.Blocks['raspy_arduino_write'], Arduino_color);
reColor(Blockly.Blocks['raspy_arduino_read'], Arduino_color);
//--------------------------------
//field of programming
document.getElementById("tb3").style.background = "rgb(27, 94, 32)";
//--------------------------------
//Autocode generate flag
var currentValue = document.getElementById("auto").value = "Off";

var taskFlag;

function autoCode() {
    currentValue = document.getElementById('auto').value;
    if (currentValue == "Off") {
        document.getElementById("auto").value = "On";
        document.getElementById("auto").style.background = "rgb(27, 94, 32)";
        currentValue = document.getElementById('auto').value;
        Blockly.mainWorkspace.addChangeListener(onFirstComment);
    } else {
        document.getElementById("auto").value = "Off";
        document.getElementById("auto").style.background = "rgb(48, 63, 159)";
        currentValue = document.getElementById('auto').value;
		Blockly.mainWorkspace.removeChangeListener(onFirstComment);
    }
    return currentValue;
}

function onFirstComment(event) {
    if ((event.type == Blockly.Events.CHANGE ||
            event.element == 'comment' ||
            !event.oldValue || event.newValue) &&
        currentValue == "On") {
        generateCode();
    }
}
//--------------------------------
var clicks = 0;
function saveXML() {
    clicks += 1;
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    $('#xmlCode').val(xmlText).focus();

    var xml_text = document.getElementById("xmlCode").value;
    var xml_textAsBlob = new Blob([xml_text], {
        type: 'text/plain'
    });
    var xmlFileName = document.getElementById("fileName").value;

    var DLink = document.createElement("a");
    if (xmlFileName) {
		if (xmlFileName.indexOf(".xml") == -1) {
            xmlFileName  = xmlFileName+".xml";
        }
        DLink.download = xmlFileName;
    } else {
        DLink.download = 'Example[' + clicks + '].xml';
    }
    DLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        DLink.href = window.webkitURL.createObjectURL(xml_textAsBlob);
    } else {
        DLink.href = window.URL.createObjectURL(xml_textAsBlob);
        DLink.style.display = "none";
        document.body.appendChild(DLink);
    }
    DLink.click();
	remoteSaveXML(xml_textAsBlob,xmlFileName);
}
//--------------------------------
//loading	
function loadXML() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("xmlCode").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

    setTimeout(
        function() {
            var toload = $('#xmlCode').val();
            var success = load(toload);

            function load(xml) {
                if (typeof xml != "string" || xml.length < 5) {
                    alert("No Input!");
                    return false;
                    return;
                }
                try {
                    var dom = Blockly.Xml.textToDom(xml);
                    Blockly.mainWorkspace.clear();
                    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
                    return true;
                } catch (e) {
                    alert("Invalid xml!");
                    return false;
                }
            }
        }, 50);
}
//--------------------------------
//saving ROS code
var saveRos_clicks = 0;

function saveRos() {
    saveRos_clicks += 1;
    if ($('#rosCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        var ros_text = document.getElementById("rosCode");
        var my_ros = ros_text.innerText || ros_text.textContent;

        var ros_textAsBlob = new Blob([my_ros], {
            type: 'text/plain'
        });

        var rosFileName = document.getElementById("fileName_ros").value;

        rosLink = document.createElement("a");

        if (rosFileName) {
			if (rosFileName.indexOf(".py") == -1) {
				rosFileName  = rosFileName+".py";
			}
            rosLink.download = rosFileName;
        } else {
            rosLink.download = 'rosCode[' + saveRos_clicks + '].py';
        }
        rosLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            rosLink.href = window.webkitURL.createObjectURL(ros_textAsBlob);
        } else {
            rosLink.href = window.URL.createObjectURL(ros_textAsBlob);
            rosLink.style.display = "none";
            document.body.appendChild(rosLink);
        }
        rosLink.click();
    }
    //save from code modifier
    else if ($('#rosCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var ros_text = document.getElementById("modifyCodeDiv");
        var my_ros = ros_text.innerText || ros_text.textContent;

        var ros_textAsBlob = new Blob([my_ros], {
            type: 'text/plain'
        });

        var rosFileName = document.getElementById("fileName_ros").value;

        rosLink = document.createElement("a");

        if (rosFileName) {
			if (rosFileName.indexOf(".beesm") == -1) {
				rosFileName  = rosFileName+".beesm";
			}
            rosLink.download = rosFileName;
        } else {
            rosLink.download = 'rosCode[' + saveros_clicks + '].beesm';
        }
        rosLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            rosLink.href = window.webkitURL.createObjectURL(ros_textAsBlob);
        } else {
            rosLink.href = window.URL.createObjectURL(ros_textAsBlob);
            rosLink.style.display = "none";
            document.body.appendChild(rosLink);
        }
        rosLink.click();
    }
}
//--------------------------------
//highlight code in the modify code window
$(function() {
    $("body").click(function(e) {
        if (e.target.id == "modifyCodeDiv" || $(e.target).parents("#modifyCodeDiv").length) {
            //hljs.highlightBlock($('#modifyCodeDiv').get(0));
        } else {
            hljs.highlightBlock($('#modifyCodeDiv').get(0));
        }
    });
});
//--------------------------------
//visible and invisible the code modifier textbox and run button
$('#modify').click(function() {
    $('#modifier').show();
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
    document.getElementById("hideRos").style.visibility = "hidden";
    document.getElementById("rosCode").style.visibility = "hidden";
});

$('#generate').click(function() {
    $('#modifier').hide();
    document.getElementById("hideRos").style.visibility = "visible";
    document.getElementById("rosCode").style.visibility = "visible";
});
//--------------------------------

//making integer
function toInt(n){ return parseInt(Number(n)); };

WebSocketRos();
var x_loc = null;
var y_loc = null;
var z_loc = null;

function WebSocketRos() {
    if ("WebSocket" in window) {
        var websocket = new WebSocket('ws://localhost:8099/ws');

        websocket.onopen = function () {
            websocket.send("ROS-Message to send");
        };

        var x_loc_white = 0;
        var y_loc_white = 0;
        var z_loc_white = 0;

        websocket.onmessage = function (evt) {
            var received_msg = evt.data;
            console.log("ROS-Data recieved...");//document.getElementById('msg').innerHTML = evt.data;
            console.log(received_msg);
            var obj = JSON.parse(received_msg);
            if (obj.type === "update_loc") {
                console.log("location of th TB3 changed!");
                x_loc = obj.x;
                y_loc = obj.y;
                z_loc = obj.z;

                var x_factor = 45 / 10.40; //4.70
                var y_factor = 20 / 5.40; //4.13

                x_loc = toInt((x_loc * x_factor) + 22.5) + 2;
                y_loc = toInt(((y_loc * y_factor)*-1) + 10) + 2;

            }
            x_loc_white = x_loc;
            y_loc_white = y_loc;
            z_loc_white = z_loc;
        };

        websocket.onclose = function() {
            // websocket is closed.
            console.log("ROS-Connection is closed...");
	        setTimeout(function(){WebSocketRos()}, 15000);
        };

        websocket.onerror   = function (evt) {
            console.log('ROS-Error occured: ' + evt.data);
        };

        window.onbeforeunload = function(evt) {
            websocket.close();
        };

    } else {
        // The browser doesn't support WebSocket
        console.log("ROS-WebSocket NOT supported by your Browser!");
    }

}

//--------------------------------
var workspace = Blockly.inject('blocklyDiv',
    {media: '../media/',
        toolbox: document.getElementById('toolbox'),
        zoom:
            {controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2},
        trashcan: true});
//--------------------------------
function discard() {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
        //renderContent();
    }
}
//--------------------------------
function resetClick() {
    var code = " ";
    document.getElementById("loader").style.display="block";
    document.getElementById("run").disabled = true;
    remoteEval(code);
}
//--------------------------------
//generating the code
function generateCode() {
    // Generate Python code and display it.
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    // Set all values to false
    Object.keys(window.PythonConfig).forEach(key => {
      window.PythonConfig[key] = false;
    });
    var code = Blockly.Python.workspaceToCode(workspace);

    //find the load_xml in the code string
    var myString = code;
    var count = (myString.match(/load_xml/g) || []).length;

    //fetch the file name after each load_xml
    for (var i = 1; i <= count; i++) {
        var n = myString.indexOf("load_xml");
        var m = myString.indexOf(";", n);
        var res = myString.substring(n, m + 1);

        var nName = res.indexOf("(") + 2;
        var mName = res.indexOf(")", nName) - 1;

        var filename = res.substring(nName, mName);
        filename = "Examples/" + filename;
        loadFileToTextbox(filename);
        myString = myString.replace(res, '');
    }

    function loadFileToTextbox(filename) {
        var xmlHTTP = new XMLHttpRequest();
        try {
            xmlHTTP.open("GET", filename, false);
            xmlHTTP.send(null);
        } catch (e) {
            window.alert("Unable to load the requested file!");
            return;
        }
        document.getElementById("xmlCode").value = xmlHTTP.responseText;
        //load the code
        var xmlText = document.getElementById('xmlCode').value;
        try {
            var xml = Blockly.Xml.textToDom(xmlText)
        } catch (e) {
            alert(e);
            return;
        }
        // Create a headless workspace.
        var workspace = new Blockly.Workspace();
        Blockly.Xml.domToWorkspace(xml, workspace);
        var codeLoad = Blockly.PHP.workspaceToCode(workspace);
        document.getElementById('rosCode').innerText = codeLoad;

        code = code.replace(res, codeLoad);
    }

    //PHP/ROS code
    document.getElementById("rosCode").innerText = (code);
    //code modifier
    document.getElementById("modifyCode").value = (code);

    //it is to put textarea content into the middle div which is "modifyCodeDiv"
    document.getElementById("modifyCodeDiv").innerText = document.getElementById("modifyCode").value;

    //highlight the code
    hljs.highlightBlock($('#rosCode').get(0));
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
}
//--------------------------------
//this is to refresh the ROS Output
function refreshOutputros() {
    document.getElementById("output").innerText = "";
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
//--------------------------------
var run_code_clicks = 0;


function runCode() {
    //run from workspace
    ++run_code_clicks;
    if ($('#rosCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        Blockly.PHP.INFINITE_LOOP_TRAP = null;
        var my_element = document.getElementById('rosCode');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var code = document.getElementById("modifyCode").value;
        document.getElementById("loader").style.display="block";
	    document.getElementById("run").disabled = true;
        remoteEval(code);
    }
    //run from code modifier
    else if ($('#rosCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var my_element = document.getElementById('modifyCodeDiv');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var ros_code = document.getElementById("modifyCode").value;
        if (ros_code === null) {
            showCode();
        }
        document.getElementById("loader").style.display="block";
	    document.getElementById("run").disabled = true;
        remoteEval(ros_code);
    }
}
//--------------------------------
//this function is to post and call the evel.php & show the output
function remoteEval(code) {
    var display_hints = true;
    var url = "http://127.0.0.1:8099/run_generated_code";
    var hint_url = "http://127.0.0.1:5000/get_debugging_hint";
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();
    var hint_request = new XMLHttpRequest();
    var output = document.getElementById('output');
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    request.onreadystatechange = function() {
        if (request.readyState === 4) { // When request is done
            if (request.status === 200) { // When status is OK
                var response = JSON.parse(request.responseText);
                if (response.success) {
                    alert("Program running succesfully!")
                    document.getElementById("loader").style.display="none";
		            document.getElementById("run").disabled = false;
                    var str_status = "Status:" + response.status;
                    var str_output = response.output;
                    var str_error = response.error;
                    hint_request.open(method, hint_url, async);
                    hint_request.setRequestHeader("Content-Type", "application/json");
                    var body = JSON.stringify({
                        "code": xmlText,
                        "output": str_output,
                        "error": str_error,
                        "status": response.status.toString(),
                        "code_language": "Python"

                    });
                    hint_request.onreadystatechange = function() {
                        if (hint_request.readyState === 4) {
                            if (hint_request.status === 200 && display_hints) {
                                var hint_response = JSON.parse(hint_request.responseText);
                                output.innerHTML = str_status + "\n" + str_output + "\n" + hint_response.hint_text;
                            }
                            else {
                                output.innerHTML = str_status + "\n" + str_output + "\n" + str_error;
                            }
                        }
                    };
                    hint_request.send(body);
                } else {
                    alert("Program running unsuccesfully!")
                    document.getElementById("loader").style.display="none";
		            document.getElementById("run").disabled = false;
                    var str_status = "Status:" + response.status;
                    var str_output = response.output;
                    var str_error = response.error;
                    hint_request.open(method, hint_url, async);
                    hint_request.setRequestHeader("Content-Type", "application/json");
                    var body = JSON.stringify({
                        "code": xmlText,
                        "output": str_output,
                        "error": str_error,
                        "status": response.status.toString(),
                        "code_language": "Python"

                    });
                    hint_request.onreadystatechange = function() {
                        if (hint_request.readyState === 4) {
                            if (hint_request.status === 200  && display_hints) {
                                var hint_response = JSON.parse(hint_request.responseText);
                                output.innerHTML = str_status + "\n" + str_output + "\n" + hint_response.hint_text;
                            }
                            else {
                                output.innerHTML = str_status + "\n" + str_output + "\n" + str_error;
                            }
                        }
                    };
                    hint_request.send(body);
                }
            } else {
                document.getElementById('output').textContent = 'HTTP Error: ' + request.status;
            }
        }
    };

    request.open(method, url, async);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(code.toString());
}
//--------------------------------
function remoteSaveXML(code, name) {
	var work_area = "ROS";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveXml.php?name="+encodeURI(name)+"&task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // alert("document saved");
        }
    }
    xhr.send(code);
}

/**
 * Starts a task by loading the corresponding XML file.
 *
 * @param {number} task_nr - The task number to start.
 *                           Valid values are 1, 2, or 3.
 *                           Each number corresponds to a specific task XML file.
 *
 * @throws {Error} If the task number is not valid.
 */
function startTask(task_nr) {
    taskFlag = task_nr;
    if (task_nr === 1) {
        startTimer(600);
        loadXML_from_files("tasks_xml/Task1turtlebot.xml");
    } else if (task_nr === 2) {
        startTimer(600);
        loadXML_from_files("tasks_xml/Task2turtlebot.xml");
    } else {
        alert("Task number not found!");
        throw new Error("Task number not found!");
    }
}

/**
 * Ends the current task and logs the task number.
 *
 * @throws {Error} If no task is currently active.
 */
function endTask() {
    if (taskFlag === undefined) {
        alert("No task is currently active.");
        throw new Error("No task is currently active.");
    }
    stopTimer();
    let log_text = "Task " + taskFlag.toString() + "," + elapsedTime.toString() + "," + run_code_clicks.toString();
    logToFile(log_text)
    saveTaskXML()
    console.log("End task:", taskFlag);
    taskFlag = undefined;
}

var intervalId;
var elapsedTime = 0;

/**
 * Starts a timer with a specified time limit.
 * The timer counts down from the given time limit and updates the display every second.
 * When the time is up, an alert is shown and the timer stops.
 *
 * @param {number} time_limit - The time limit in seconds for the timer.
 */
function startTimer(time_limit) {
    clearInterval(intervalId); // Clear any existing timer
    intervalId = setInterval(function() {
        elapsedTime++;
        let time_left = time_limit - elapsedTime;
        if (elapsedTime >= time_limit) {
            alert("Time is up!");
            stopTimer();
            endTask();
        }
    }, 1000);
}

/**
 * Stops the currently running timer and hides the timer display.
 * Clears the interval to stop the timer from updating.
 */
function stopTimer() {
    clearInterval(intervalId);
}

/**
 * Logs the provided text to a file on the server.
 * Sends the log text to the server using an XMLHttpRequest.
 *
 * @param {string} log - The log text to be saved.
 */
function logToFile(log) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "logFile.php?task="+taskFlag, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("Log saved successfully.");
            } else {
                console.error("Error saving log: " + xhr.status + " - " + xhr.responseText);
            }
        }
    };
    xhr.send(log);
}

function saveTaskXML() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    $('#xmlCode').val(xmlText).focus();

    var xml_text = document.getElementById("xmlCode").value;
    var xml_textAsBlob = new Blob([xml_text], {
        type: 'text/plain'
    });
	remoteSaveTaskXML(xml_textAsBlob);
}

function remoteSaveTaskXML(code) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveXml.php?task="+taskFlag, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // alert("document saved");
        }
    }
    xhr.send(code);
}

/**
 * Returns the xml code on the workspace.
 *
 * @param file_path
 */
function loadXML_from_files(file_path) {
    var fileToLoad = file_path;

    var fileReader = new XMLHttpRequest();
    fileReader.onload = function() {
        if (fileReader.readyState === 4 && fileReader.status === 200) {
            var textFromFileLoaded = fileReader.responseText;
            document.getElementById("xmlCode").value = textFromFileLoaded;
        }
    };
    fileReader.open("GET", fileToLoad, true);
    fileReader.send();

    setTimeout(
        function() {
            var toload = $('#xmlCode').val();
            var success = load(toload);

            function load(xml) {
                if (typeof xml != "string" || xml.length < 5) {
                    alert("No Input!");
                    return false;
                    return;
                }
                try {
                    var dom = Blockly.Xml.textToDom(xml);
                    Blockly.mainWorkspace.clear();
                    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
                    return true;
                } catch (e) {
                    alert("Invalid xml!");
                    return false;
                }
            }
        }, 50);
}