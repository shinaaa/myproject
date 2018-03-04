<?php
	header("Content-Type:application/json");
	require_once("../init.php");
	$output=[];
	$sql="select * from fw_index_products";
	$result=mysqli_fetch_all(mysqli_query($conn,$sql),1);
	echo json_encode($result);
?>