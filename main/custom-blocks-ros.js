Blockly.Blocks['print_r'] = {
    init: function() {
        this.appendValueInput("print_r")
            .setCheck(null)
            .appendField("print_r");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['tag_br'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Line Break");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['loop_controller'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["break out", "break"],
                ["continue with the next iteration", "continue"]
            ]), "cntrol")
            .appendField("of loop");
        this.setPreviousStatement(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function(block) {
        block = !1;
        var b = this;
        do {
            if (-1 != this.LOOP_TYPES.indexOf(b.type)) {
                block = !0;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        block ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    },
    LOOP_TYPES: ["controls_repeat", "controls_forEach", "controls_repeat_ext", "foreach", "controls_for", "controls_whileUntil", "foreach_simple"]
};
//----------------------------------------------
Blockly.Blocks['foreach_simple'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("for each item");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['load_xml'] = {
    init: function() {
        this.appendValueInput("xml")
            .setCheck("String")
            .appendField("load XML");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(70);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sleep_time'] = {
    init: function() {
        this.appendValueInput("sleep")
            .setCheck("Number")
            .appendField("sleep");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(70);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['repeat_list'] = {
    init: function() {
        this.appendValueInput("item")
            .setCheck(null)
            .appendField("create list with item");
        this.appendValueInput("num")
            .setCheck("Number")
            .appendField("repeated");
        this.appendDummyInput()
            .appendField("times");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['length_list'] = {
    init: function() {
        this.appendValueInput("length")
            .setCheck("String")
            .appendField("length of");
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['indexof_list'] = {
    init: function() {
        this.appendValueInput("list")
            .setCheck(null)
            .appendField("in list");
        this.appendDummyInput()
            .appendField("find")
            .appendField(new Blockly.FieldDropdown([
                ["first", "first"],
                ["last", "last"]
            ]), "loc");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField("occurrence of item");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sort_list'] = {
    init: function() {
        this.appendValueInput("list")
            .setCheck(null)
            .appendField("sort")
            .appendField(new Blockly.FieldDropdown([
                ["numeric", "NUMERIC"],
                ["alphabetic", "TEXT"],
                ["alphabetic, ignore case", "IGNORE_CASE"]
            ]), "type")
            .appendField(new Blockly.FieldDropdown([
                ["ascending", "1"],
                ["descending", "-1"]
            ]), "direction");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(140);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//*****************************************************************
//********************* Free Navigation ***************************
//*****************************************************************
Blockly.Blocks['movebot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['turnbot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([
                ["Right", "'Right'"],
                ["Left", "'Left'"]
            ]), "rotation");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['safe_movebot_sec'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("safe move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("second with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['movebot_dis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("distance")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("meter with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['turnbot_deg'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([
                ["Right", "'Right'"],
                ["Left", "'Left'"]
            ]), "rotation");
        this.appendValueInput("degree")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("degree with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["normal", "'normal'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['safe_movebot_dis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("safe move")
            .appendField(new Blockly.FieldDropdown([
                ["Forward", "'Forward'"],
                ["Backward", "'Backward'"]
            ]), "direction");
        this.appendValueInput("distance")
            .setCheck("Number")
            .appendField("for");
        this.appendDummyInput()
            .appendField("meter with")
            .appendField(new Blockly.FieldDropdown([
                ["slow", "'slow'"],
                ["fast", "'fast'"]
            ]), "speed")
            .appendField("speed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['sleep_bot'] = {
    init: function() {
        this.appendValueInput("second")
            .setCheck("Number")
            .appendField("wait for");
        this.appendDummyInput()
            .appendField("second");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laser scanner data");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data_range'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laser scanner data");
        this.appendValueInput("x_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from degree");
        this.appendValueInput("y_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to degree");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['scanner_data_check'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("checking laser scanner data");
        this.appendValueInput("x_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("from degree");
        this.appendValueInput("y_range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to degree");
        this.appendValueInput("distance")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("distance(10-200cm)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['stop_bot'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("STOP ROBOT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(320);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//*****************************************************************
//************************ For Arduino ****************************
//*****************************************************************
Blockly.Blocks['raspy_arduino_write'] = {
    init: function() {
        this.appendValueInput("number")
            .setCheck("Number")
            .appendField("write");
        this.appendDummyInput()
            .appendField("to port")
            .appendField(new Blockly.FieldDropdown([["ACM0","00"], ["ACM1","01"], ["USB0","10"], ["USB1","11"]]), "port");
        this.appendDummyInput()
            .appendField("with data rate")
            .appendField(new Blockly.FieldDropdown([["115200","115200"], ["9600","9600"], ["300","300"]]), "rate")
            .appendField("bps");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//----------------------------------------------
Blockly.Blocks['raspy_arduino_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("read from port")
            .appendField(new Blockly.FieldDropdown([["ACM0","00"], ["ACM1","01"], ["USB0","10"], ["USB1","11"]]), "port");
        this.appendDummyInput()
            .appendField("with data rate")
            .appendField(new Blockly.FieldDropdown([["115200","115200"], ["9600","9600"], ["300","300"]]), "rate")
            .appendField("bps");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
