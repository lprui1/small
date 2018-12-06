import {config} from '../config.js'
class HTTP{
  request(params){
    if(!params.method){
      params.method = "GET" 
    }
    wx.request({
      url: config.api_url+params.url,
      method:params.method,
      data:params.data,
      header:{ 
        'content-type':'application/json',
        "appkey":config.appKey 
      },
      success:res => {
        if (res.statusCode == 200){
          params.success(res)
        }else{
          console.log('错误')
        }
       
        // console.log(res)
      }
    })
  }
}
export { HTTP }