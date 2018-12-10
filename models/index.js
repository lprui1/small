import { HTTP } from '../utils/http.js'

class http extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'classic/latest',
      success: res => {
        
        let key = res.data.index
        let key1 = `class-${key}`
        var ss = wx.getStorageSync(key1)
        if(ss == ''){
          callback(res)
        }else{
          callback(ss)
        }
        wx.setStorageSync(key1, res)
      
      } 
    })
  }
}
export { http }