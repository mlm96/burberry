<?php
$key = $_POST['key'];
$sql = "SELECT * FROM  `goods` WHERE `cat_one_id`='$key'";
$link = mysqli_connect('localhost', 'root', 'root', 'bk2004');
$res = mysqli_query($link, $sql);
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo json_encode(array(
    "message" => "获取商品列表成功",
    "code" => 1,
    "list" => $data,
    "sql" => $sql
  ));
?>