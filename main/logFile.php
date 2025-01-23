<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', 'error_log.txt');

$student = "Student1";
$code = file_get_contents("php://input");
if (strlen($code) > 1) {
    $task = isset($_REQUEST["task"]) ? $_REQUEST["task"] : 'unknown';
    $logFile = "logs/log_" . $student . "_Task_" . $task . "_" . time() . ".log";
    $handle = fopen($logFile, 'w');
    if ($handle) {
        if (fwrite($handle, $code) === false) {
            http_response_code(500);
            echo "Error writing to log file.";
        } else {
            echo "Log saved successfully.";
        }
        fclose($handle);
    } else {
        http_response_code(500);
        echo "Error opening log file.";
    }
} else {
    http_response_code(400);
    echo "Invalid request.";
}
?>