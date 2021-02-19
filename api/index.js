const SERVER_URL="http://192.168.1.67:8080"

function post(url,data){
  const promise=new Promise((resolve,reject)=>{
    wx.request({
      url: SERVER_URL+url,
      method:'POST',
      data:data,
      success:(result)=>{
        console.log("url返回结果:",result.data);
        resolve(result.data);
      }
    });
  });
  return promise;
}

module.exports={
  post
}