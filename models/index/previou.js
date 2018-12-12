import { HTTP } from '../../utils/http.js' 
class prev extends HTTP {
  prevs(index,list){
    // console.log(index)
    if(index <= 2){
      index = 2
    }
    let key = index - 1
    let key1 = `class-${key}`
    var ss = wx.getStorageSync(key1)
    if(ss == ''){
      this.request({
        url: "classic/" + index + "/previous",
        success: res => {
          list(res)
          console.log(key1)
          wx.setStorageSync(key1,res)
          wx.setStorageSync("key", key1)
        }
      })
    }else{
      list(ss)
      wx.setStorageSync("key", key1)
      console.log(key1)
    }
  }
}
export { prev }