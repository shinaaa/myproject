<?php
	header("Content-Type:application/json");
	require("../init.php");
	@$rid = $_REQUEST["rid"];
	if($rid){
		$output = [];
		$sql = "select title,material,meaning,price from fw_rose where rid='$rid'";
		$result = mysqli_query($conn,$sql);
		$rows = mysqli_fetch_all($result,1);
		$output["data"] = $rows;
		$sql = "select pic from fw_rose_pic where rpid='$rid'";
		$result = mysqli_query($conn,$sql);
		$rows = mysqli_fetch_all($result,1);
		$output["img"] = $rows;
		echo json_encode($output);
	}
?>