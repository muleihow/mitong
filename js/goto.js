// var user = $1('.name')
// var pass = $1('.pwd')
// var login = $1('.login')
// var regis = $1('.regis')

// login.onclick = function(){
//     var us = user.value
//     var ps = pass.value

//     if(!us || !ps){
//         alert('账号或密码不能为空')
//         return
//     }
//     ajax({
//         url:'../html/user.php',
//         type:'post',
//         date:{
//             user:us,
//             pass:ps,
//             type:'login',
            
//         },
//             dataType:'json',
//             success:function(json){
//                 alert(json.msg)
//             },
//             error:function(code){
//                 alert(code)
//             }
        
//     })
// }


// regis.onclick = function(){
//     var us = user.value
//     var ps = pass.value

//     if(!us || !ps){
//         alert('账号或密码不能为空')
//         return
//     }
//     ajax({
//         url:'../html/user.php',
//         type:'post',
//         date:{
//             user:us,
//             pass:ps,
//             type:'add',
            
//         },
//             dataType:'json',
//             success:function(json){
//                 alert(json.msg)
//             },
//             error:function(code){
//                 alert(code)
//             }
        
//     })
// }

var user = $1('.user')
var pass = $1('.pass')
var login = $1('.login')
var register = $1('.register')

// 登录
login.onclick = function (){
  var us = user.value
  var ps = pass.value

  // 验证
  if (!us || !ps) {
    alert('账号或密码不能为空')
    return
  }
location.href='../index.html'
  // 提交数据
  ajax({
    url: '../html/user.php',
    type: 'post',
    data: {
      user: us,
      pass: ps,
      type: 'login',
    },
    dataType: 'json',
    success: function (json){
      alert(json.msg)
    },
    error:function (code){
      alert(code)
    }
  })
  
}



// 注册
register.onclick = function (){
  var us = user.value
  var ps = pass.value

  // 验证
  if (!us || !ps) {
    alert('账号或密码不能为空')
    return
  }

  // 提交数据
  ajax({
    url: '../html/user.php',
    type: 'post',
    data: {
      user: us,
      pass: ps,
      type: 'add',
    },
    dataType: 'json',
    success: function (json){
      alert(json.msg)
    },
    error:function (code){
      alert(code)
    }
  })

}