<?php
require("../init.php");
session_start();
$uid = $_SESSION["uid"];
$address = $_REQUEST["address"];
$sql = "update fw_user set address='$address' where uid=$uid";
$result = mysqli_query($conn,$sql);

?>