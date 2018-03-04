<?php
	header("Content-Type:application/json");
	@$pno = $_REQUEST["pno"];
	if(!$pno){
		$pno = 1;
	}
	require("../init.php");
	$pageSize = 12;//每一页显示的商品数
	$offSet = ($pno-1)*$pageSize;//每一页从哪一个商品开始显示
	$sql = "select rid,fid,title,price,material,src,(select pic from fw_rose_pic where rpid=rid limit 1) as img from fw_rose limit $offSet,$pageSize";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	$sql = "select count(*) from fw_rose";
	$result = mysqli_query($conn,$sql);
	if(mysqli_error($conn)){
		echo mysqli_error($conn);
	}
	$totalCount = mysqli_fetch_row($result)[0];//获得商品总数目
	$totalPage = ceil($totalCount/$pageSize);//计算总页数
	$output = [
		"pno"=>$pno,
		"pageSize"=>$pageSize,
		"totalCount"=>$totalCount,
		"totalPage"=>$totalPage,
		"data"=>$rows
	];
	//echo $totalCount;
	echo json_encode($output);
?>