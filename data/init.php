<?php
	$conn=mysqli_connect("127.0.0.1","root","","flower_whisper",3306);
	mysqli_query($conn,"set names utf8");
	header('Access-Control-Allow-Origin:http://localhost:3000');
	header('Access-Control-Allow-Credentials:true');
?>