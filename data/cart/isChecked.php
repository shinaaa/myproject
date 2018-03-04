<?php
	require("../init.php");
	session_start();
	@$uid = $_SESSION["uid"];
	$checked = $_REQUEST["checked"];
	$srid = $_REQUEST["srid"];
	if($uid){
		$sql = "update fw_shoppingcart set checked=$checked where srid=$srid and suid=$uid";
		$result = mysqli_query($conn, $sql);
		if($result){
			echo json_encode(["ok"=>100]);
		}else{
			echo json_encode(["ok"=>-100]);
		}
	}
?>