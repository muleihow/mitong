<?php
 header("Access-Control-Allow-Origin:*"); 

// 设置响应头信息
header('Content-Type:text/html;charset=utf-8');

$user = $_POST['user'];
$pass = $_POST['pass'];
$type = $_POST['type'];

$link = mysqli_connect('localhost','root','root','mitong');

if(!$link){
    die('{"err":-1,"msg":"连接失败"}');
}

if(!$user || !$pass || !$type){
    die('{"err":-2,"msg":"连接失败"}');
}else{
    if($type === 'login'){
        $login_sql = "select * from account where usernamee='$user' and password='$pass'";
        $login_res = mysqli_query($link,$login_sql);
        $login_arr = mysqli_fetch_all($login_res,1);
        if(count($login_arr) > 0){
            echo'{"err":0,"msg":"登录成功"}';
        }else{
            echo'{"err":-3,"msg":"账号或密码错误"}';
        }
    }

    if($type === 'add'){
        $query_sql = "select * from account where usernamee='$user'";
        $query_res = mysqli_query($link,$query_sql);
        $query_arr = mysqli_fetch_all($query_res,1);
        if(count($query_arr)>0){
            echo'{"err":-4,"msg":"账号已存在"}';
        }else{
            $insert_sql = "insert into account(username,password) values('$user','$pass')";
            mysqli_query($link,$insert_sql);
            $num = mysqli_affected_rows($link);
            if($num > 0){
                echo'{"err":1,"msg":"注册成功"}';
            }else{
                echo'{"err":-5,"msg":"注册失败"}';
            }
        }
    }
}



mysqli_close($link);
?>