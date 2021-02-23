// /* express的服务器 */
// const baseReqUrl = 'chilihouse';
// //1. 导入express
// var express = require('express');

// //2. 创建express服务器
// var server = express();

// //3. 创建中间件:use
// //截取请求, 拦截回调
// server.use('/', function (request, response, next) {
//   console.log('中间件');
//   console.log(request.query.page);
//   next();
// });
// //4. 访问服务器(get或者post)
// //参数一: 请求根路径
// //4.1 get请求
// server.get('/home', function (request, response) {
//   // console.log(request)
//   response.send('get参数请求成功');
// });
// //4.2 post请求
// server.post(baseReqUrl + '/login', function (request, response) {
//   response.send('post请求成功');
// });

// //4. 绑定端口
// server.listen(4040);
// console.log('启动4040');

/**
 * 创建Post请求
 * */

//1. 导入express
var express = require('express');

//2. 加载模块
var bodyParse = require('body-parser');

//3. 创建服务器
var server = express();

//4. 生成解析器
// application/x-www-form-urlencoded
var urlencoded = bodyParse.urlencoded({ extends: true });

// application/json
var jsonParser = bodyParse.json();

//5. 中间件: 把请求体参数 存放到request.body
server.use('/login', jsonParser);

//6. 请求数据
server.get('/home', function (request, response) {
  //解析get请求参数
  console.log('get请求成功');
  response.send('123');
});
// request:request请求头,请求体
server.post('/login', function (request, response) {
  //解析post请求参数
  if (request.body.name === 'lin') {
    response.send({
      code: 200,
      data: request.body,
    });
  } else {
    response.send({
      code: 20000,
      message: '登录账号不存在',
    });
  }
});

//7. 绑定端口
server.listen(5050);
console.log('已经启动');
