<?php
require_once("../init.php");
session_start();
session_unset();
session_destroy();
echo json_encode(["ok"=>0,"msg"=>"logout success"])
?>