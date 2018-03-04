<?php
	require_once("../init.php");
	$count = $_REQUEST["count"];
	$srid = $_REQUEST["srid"];
	$price = $_REQUEST["price"];
	session_start();
	@$suid=$_SESSION["uid"];
	$sql = "update fw_shoppingcart set count=$count,totalprice=count*$price where srid=$srid and suid=$suid";
	$result = mysqli_query($conn, $sql);
	if($result){
		echo json_encode(["ok"=>1]);
	}else{
		echo json_encode(["ok"=>0]);
	}
?>