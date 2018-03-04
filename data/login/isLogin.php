<?php
header("Content-Type:application/json");
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid){
  $sql="select uname from fw_user where uid=$uid";
  $uname=mysqli_fetch_row(mysqli_query($conn,$sql))[0];
  echo json_encode(["ok"=>1,"uname"=>$uname,"uid"=>$uid]);
}else
  echo json_encode(["ok"=>0]);