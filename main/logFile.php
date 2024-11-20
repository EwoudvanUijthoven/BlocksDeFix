<?php
$code = file_get_contents("php://input");
if (strlen($code)> 1) {
    fwrite($handle = fopen("logs/Task_".$_REQUEST["task"]."_".time().".log", 'w'), $code);
}
?>
