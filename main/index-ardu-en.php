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
    <script src="codemirror/mode/clike/clike.js"></script>
    <script src="codemirror/mode/clike/clike.js"></script>

    <meta charset="utf-8">
    <title>Blockly: Generating Arduino Code</title>
    <script src="../blockly_compressed.js"></script>
    <script src="../blocks_compressed.js"></script>
    <script src="../php_compressed.js"></script>
    <script src="../msg/js/en.js"></script>

    <script src="custom-blocks-ardu.js"></script>
    <script src="../arduino_compressed.js"></script>
    <script type="text/javascript" src="spin.js"></script>
</head>

<body id="body_main">

<?php
$pageRefreshed = isset($_SERVER['HTTP_CACHE_CONTROL']) && $_SERVER['HTTP_CACHE_CONTROL'] === 'max-age=0';
?>
<div id="main">
    <div id="header">
        <div id="leftHeader" style="margin-right:15px">
            <h1 style="float:left; display:inline;">
                <img src="../media/beesm.png" alt="Smiley face" height="42" width="100">
            </h1>
        </div>
        <div id="rightHeader">
            <button class="btn_task" id="Task3" onclick="startTask(3)" style="float:left;">Start Task 3</button>
            <button class="btn_task" id="TaskEnd" onclick="endTask()" style="float:left;">End Task</button>
            <!----------->
            <button class="btn_tabs" id="tb3" onclick="location.href='index-ros-en.php';" style="float:right;">TurtleBot 3</button>
            <button class="btn_tabs" id="ardu" onclick="#" style="float:right;" disabled>Arduino</button>
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
    </div>
    <!----------->
    <div id="rightDiv">
        <div class="codeBtn">
            <button class="btn" id="run" onclick="runCode();uploadClick();">Upload Code</button>
            <button class="btn" id="generate" onclick="generateCode();">Generate Code</button>
            <button class="btn" id="modify" onclick="">Code Modifier</button>
            <button class="btn" id="auto" onclick="autoCode()">AutoCode Generator</button>
            <button class="btn" id="reset" onclick="resetClick()" style="float:right;">Reset</button>
            <button class="btn" id="discard" onclick="discard()" style="float:right;">Discard</button>
        </div>
        <!----------->
        <div class="codeStyleRight">
            <h4 id="hideArdu">Arduino Code</h4><br>
            <div id="arduCode"></div>
        </div>
        <!----------->
        <!--when the user want to modify the code-->
        <div id="modifier" class="codeStyleRight" style="top:40px;">
            <h4>Arduino Code Modifier</h4><br>
            <textarea id="modifyCode"></textarea>
            <div id="modifyCodeDiv" contenteditable="true"></div>
        </div>
        <div class="codeBtn">
            <table id="btnsTable">
                <tr class="btnsTr">
                    <td class="btnsTd" style="width: 10%;">
                        <h5 style="margin:0px;">File Name:</h5>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input id="fileName_ardu"></input>
                    </td>
                    <td class="btnsTd" style="width: 20%;"><input class="btn" id="saving_ardu" type="button" value="Save Code" onclick="saveArdu();" /></td>
                    <td align="right" class="btnsTd" style="width: 32%;">
                    </td>
                    <td align="right" class="btnsTd" style="width: 35%;">
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
    <!--end div rightDiv-->
</div>
<!--end div main-->
<!----------->
<!----------->
<xml id="toolbox" style="display: none">
    <category name="Logic" colour="#43A047">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_null"></block>
        <block type="logic_boolean"></block>
        <block type="logic_ternary"></block>
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
        <block type="base_map">
            <value name="DMAX">
                <block type="math_number">
                    <field name="NUM">180</field>
                </block>
            </value>
        </block>
	<block type="lastcheck"></block>
        <block type="resettime"></block>
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
    </category>
    <category name="Control" colour="#0277BD">
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
            <value name="BY">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="base_delay">
            <value name="DELAY_TIME">
                <block type="math_number">
                    <field name="NUM">1000</field>
                    <</block>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
        <block type="arduino_functions"></block>
    </category>
    <category name="Integers" custom="VARIABLE" colour="#AFB42B"></category>
    <category name="Variables" colour="#827717">
        <block type="define_variable"></block>
        <block type="use_variable"></block>
    </category>
    <category name="Functions" custom="PROCEDURE" colour="#01579B"></category>
    <sep></sep>
    <category name="Arduino" colour="#33691E">
        <block type="inout_digital_write"></block>
        <block type="inout_digital_read"></block>
    </category>
    </category>
</xml>

<script src="myJavaScript-ardu-en.js"></script>

</body>

</html>

