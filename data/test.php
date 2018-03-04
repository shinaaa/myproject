<?php
//header("Content-Type:application/json");
require("init.php");
$sql = "select title,price from fw_rose";
$result = mysqli_query($conn,$sql);
$arr = sql_execute($sql);
echo json_encode($arr);
?>