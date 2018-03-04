<?php
//获取上传文件数组 $_FILES
//获取上传文件名
$picname = $_FILES["mypic"]["name"];
//获取上传文件大小
$picsize = $_FILES["mypic"]["size"]/1000;//转换成kb，原始是b
//echo $picsize;
//如果文件大小超过2mb,提示上传文件过大'{"code":-1,"msg":"上传文件过大"}'
if($picsize>25000){
	echo '{"code":-1,"msg":"上传文件过大"}';
	exit;
}
//判断上传是否是图片jpg png gif '{"code":-2,"msg":"上传文件不正确"}'
$type = strstr($picname,".");
if($type!=".jpg"&&$type!=".png"&&$type!=".gif"){
	echo '{"code":-2,"msg":"上传文件格式不正确"}';
	exit;
}
//创建新文件名
$pics = time().rand(1,9999).$type;
//将临时文件移动到上传目录uploads中，并使用新文件名
$src = $_FILES["mypic"]["tmp_name"];
$des = "uploads/".$pics;
move_uploaded_file($src,$des);
echo '{"code":1,"msg":"上传成功"}';
?>