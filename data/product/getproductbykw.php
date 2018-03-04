<?php
require("../init.php");
@$kw = $_REQUEST["kw"];
if(!$kw){
	$kw = "";
}
$sql = "select fid,rid,title,price,material,src,(select pic from fw_rose_pic where rpid=rid limit 1) as img from fw_rose";//查出全部
$sql.=" where material like '%$kw%' or title like '%$kw%'";//模糊查询
$pageSize=12;//每一页显示的商品数
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
		echo mysqli_error($conn);
	}
$rows=mysqli_fetch_all($result,1);
$count=count($rows);//获得商品总数目
@$pno=$_REQUEST["pno"];
if(!$pno) $pno=1;
$sql.=" limit ".($pno-1)*$pageSize.",$pageSize";//($pno-1)*$pageSize: 每一页从哪一个商品开始显示
$arr = mysqli_fetch_All(mysqli_query($conn,$sql),1);
$fav_rid = -1;
session_start();
@$uid = $_SESSION["uid"];
if($uid){
	$sql = "select rid from fw_fav where uid=$uid";
	$result = mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result);
	if($rows){
		$fav_rid = $rows;
	}
}
//echo json_encode($fav_rid);
$output=[
  "pageSize"=>$pageSize,
  "totalCount"=>$count,
  "totalPage"=>ceil($count/$pageSize),//计算总页数
  "pno"=>$pno,
	"fav_rid"=>$fav_rid,
  "data"=>$arr
];
echo json_encode($output);
?>

