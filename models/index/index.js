import { HTTP } from '../../utils/http.js'

class http extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'classic/latest',
      success: res => {
        // console.log(res)
        let key = res.data.index
        let key1 = `class-${key}`
        var ss = wx.getStorageSync(key1)
        if(ss == ''){
          callback(res)
          wx.setStorageSync(key1, res)
          wx.setStorageSync("key", key1)
        }else{
          callback(ss)
          wx.setStorageSync("key" , key1)
        }
      } 
    })
  }
}
export { http }