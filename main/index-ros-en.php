<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="myStyle.css">

    <script src="jquery-3.2.1.min.js"></script>
    <!--for code highlighter-->
    <link rel="stylesheet" href="codeHighlighter/styles/default.css">
    <script src="codeHighlighter/highlight.pack.js"></script>

    <!--use codemirror to highlight text area-->
    <script src="codemirror/lib/codemirror.js"></script>
    <link rel="stylesheet" href="codemirror/lib/codemirror.css">
    <script src="codemirror/mode/xml/xml.js"></script>
    <script src="codemirror/mode/php/php.js"></script>
    <script src="codemirror/mode/python/python.js"></script>

    <meta charset="utf-8">
    <title>Blockly: Generating TurtleBot3 Code</title>
    <script src="../blockly_compressed.js"></script>
    <script src="../blocks_compressed.js"></script>
    <!--<script src="../arduino/comparessed/blocks_compressed.js"></script>-->
    <script src="../php_compressed.js"></script>
    <script src="../python_compressed.js"></script>
    <script src="../msg/js/en.js"></script>

    <!--<script src="custom-blocks30.js"></script>
    <script src="../arduino_compressed30.js"></script>-->

    <!--<script type="text/javascript" src="../arduino/Blob.js"></script>
    <script type="text/javascript" src="../arduino/spin.js"></script>
    <script type="text/javascript" src="../arduino/FileSaver.min.js"></script>-->

    <!--<script type="text/javascript" src="spin.js"></script>
    <script type="text/javascript" src="../arduino/blockly_helper.js"></script>-->

    <script src="custom-blocks-ros.js"></script>
    <script src="../ros_compressed.js"></script>
</head>

<body id="body_main">

<?php
$pageRefreshed = isset($_SERVER['HTTP_CACHE_CONTROL']) && $_SERVER['HTTP_CACHE_CONTROL'] === 'max-age=0';
?>
<div id="main">
    <div id="header">
        <div id="leftHeader" style="margin-right:15px">
            <h1 style="float:left; display:inline;">
                <b>BlocksDeFix</b>
            </h1>
        </div>
        <div id="rightHeader">
            <button class="btn_task" id="Task1" onclick="startTask(1)" style="float:left;">Start Task 1</button>
            <button class="btn_task" id="Task2" onclick="startTask(2)" style="float:left;">Start Task 2</button>
            <button class="btn_task" id="TaskEnd" onclick="endTask()" style="float:left;">End Task</button>
            <!----------->
            <button class="btn_tabs" id="tb3" onclick="#" style="float:right;" disabled>TurtleBot 3</button>
            <button class="btn_tabs" id="ardu" onclick="location.href='index-ardu-en.php';" style="float:right;">Arduino</button>
        </div>
    </div>
    <!----------->
    <!----------->
    <div id="leftDiv">
        <!--this is too design the Blockly workspace-->
        <div id="blocklyDiv"></div>
        <!----------->
        <div id="codeStyleLeft">
            <h4 id="xmlH4">XML Code</h4><br>
            <textarea id="xmlCode"></textarea>
            <div id="xmlBtn">
                <table id="btnsTable">
                    <tr class="btnsTr">
                        <td class="btnsTd" style="width: 12%;">
                            <h5 style="margin:0px;">File Name:</h5>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input id="fileName"></input>
                        </td>
                        <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving" type="button" value="Save Blocks" onclick="saveXML();" /></td>

                        <td align="right" class="btnsTd" style="width: 12%;">
                            <h5 style="margin:0px;">Select File:</h5>
                        </td>
                        <td align="right" class="btnsTd" style="width: 23%;"><input type="file" id="fileToLoad" style="width:180px;"></label>
                        </td>
                        <td align="right" class="btnsTd" style="width: 15%;"><input class="btn" id="loading" type="button" value="Load Blocks" onclick="loadXML()" /></td>
                    </tr>
                </table>
            </div>
            <!--code style left-->
        </div>
        <!--left DIV-->
    </div>
    <!----------->
    <div id="rightDiv">
        <div class="codeBtn">
            <button class="btn" id="run" onclick="runCode();">Run Code</button>
            <button class="btn" id="generate" onclick="generateCode();">Generate Code</button>
            <button class="btn" id="modify" onclick="">Code Modifier</button>
            <button class="btn" id="auto" onclick="autoCode()">AutoCode Generator</button>
            <button class="btn" id="reset" onclick="resetClick()" style="float:right;">Reset</button>
            <button class="btn" id="discard" onclick="discard()" style="float:right;">Discard</button>
        </div>
        <!----------->
        <div class="codeStyleRight">
            <h4 id="hideRos">Python Code</h4><br>
            <div id="rosCode"></div>
        </div>
        <!----------->
        <!--when the user want to modify the code-->
        <div id="modifier" class="codeStyleRight" style="top:40px;">
            <h4>ROS Code Modifier</h4><br>
            <textarea id="modifyCode"></textarea>
            <div id="modifyCodeDiv" contenteditable="true"></div>
        </div>
        <div class="codeBtn">
            <table id="btnsTable">
                <tr class="btnsTr">
                    <td class="btnsTd" style="width: 10%;">
                        <h5 style="margin:0px;">File Name:</h5>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input id="fileName_ros"></input>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving_php" type="button" value="Save Code" onclick="saveRos();" /></td>

                    <td align="right" class="btnsTd" style="width: 32%;">
                    </td>
                </tr>
            </table>
            </div>
            <div class="codeStyleLeft">
                <div id="loader" style="display: none; position: absolute; left: 100px;"></div>
                <h4>Output</h4><br>
                <div id="output-wrapper">
                    <div id="output"></div>
                </div>
            </div>
        <!----------->
</div>
<!--end div main-->
<!----------->
<!----------->
<xml id="toolbox" style="display: none">
    <category name="Logic" colour="#43A047">
        <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_null"></block>
        <block type="logic_boolean"></block>
        <block type="logic_ternary"></block>
    </category>
    <category name="Loops" colour="#F44336">
        <block type="controls_forEach"></block>
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="controls_for">
            <value name="FROM">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="TO">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="loop_controller"></block>
    </category>
    <category name="Math" colour="#FF9800">
        <block type="math_number"></block>
        <block type="math_arithmetic">
            <value name="A">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="B">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
        </block>
        <block type="math_single">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">9</field>
                </block>
            </value>
        </block>
        <block type="math_trig">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">45</field>
                </block>
            </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="math_round">
            <value name="NUM">
                <block type="math_number">
                    <field name="NUM">3.1</field>
                </block>
            </value>
        </block>
        <block type="math_on_list"></block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <block type="math_number">
                    <field name="NUM">64</field>
                </block>
            </value>
            <value name="DIVISOR">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <block type="math_number">
                    <field name="NUM">50</field>
                </block>
            </value>
            <value name="LOW">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="HIGH">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="TO">
                <block type="math_number">
                    <field name="NUM">100</field>
                </block>
            </value>
        </block>
        <block type="math_random_float"></block>
    </category>
    <category name="Text" colour="#AD1457">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append">
            <value name="TEXT">
                <block type="text"></block>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT"></field>
                </block>
            </value>
        </block>
        <block type="text_indexOf">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
            <value name="FIND">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_charAt">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
        <block type="text_getSubstring">
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
        <block type="text_changeCase">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_trim">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_print">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        <block type="text_prompt_ext">
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
        </block>
        </value>
        </block>
    </category>
    <category name="Lists" colour="#33691E">
        <block type="lists_create_with"></block>
        <block type="lists_create_with">
            <mutation items="0"></mutation>
        </block>
        <block type="repeat_list">
            <value name="num">
                <block type="math_number">
                    <field name="NUM">3</field>
                </block>
            </value>
        </block>
        <block type="length_list"></block>
        <block type="lists_isEmpty"></block>
        <block type="indexof_list">
            <value name="list">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
        <block type="lists_split">
            <value name="DELIM">
                <block type="text">
                    <field name="TEXT">,</field>
                </block>
            </value>
        </block>
        <block type="sort_list"></block>
        <block type="print_r">
            <value name="print_r">
                <block type="variables_get">
                    <field name="VAR">list</field>
                </block>
            </value>
        </block>
    </category>
    <category name="Control" colour="#0277BD">
        <block type="tag_br"></block>
        <block type="load_xml">
            <value name="xml">
                <block type="text">
                    <field name="TEXT">file name</field>
                </block>
            </value>
        </block>
        <block type="sleep_time">
            <value name="sleep">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
    </category>
    <category name="Variables" custom="VARIABLE" colour="#AFB42B">
        <block type="variables_set"></block>
        <block type="variables_get"></block>
        <block type="math_change"></block>
    </category>
    <category name="Functions" custom="PROCEDURE" colour="#01579B"></category>
    <sep></sep>
    <category name="Robot" colour="#FF7043">
        <block type="movebot_sec">
            <value name="second">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="turnbot_sec">
            <value name="second">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="safe_movebot_sec">
            <value name="second">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="movebot_dis">
            <value name="distance">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="turnbot_deg">
            <value name="degree">
                <block type="math_number">
                    <field name="NUM">90</field>
                </block>
            </value>
        </block>
        <block type="safe_movebot_dis">
            <value name="distance">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="sleep_bot">
            <value name="second">
                <block type="math_number">
                    <field name="NUM">0</field>
                </block>
            </value>
        </block>
        <block type="stop_bot"></block>
    </category>
</xml>

<script src="myJavaScript-ros-en.js"></script>

</body>

</html>
