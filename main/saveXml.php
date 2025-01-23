<?php
$code = file_get_contents("php://input");
if (strlen($code)> 1) {
    $task = isset($_REQUEST["task"]) ? $_REQUEST["task"] : 'unknown';
    fwrite($handle = fopen("logs/XML_Task_" . $task . "_" . time() . ".xml", 'w'), $code);
}
?>
