import { HTTP } from '../../utils/http.js' 
class prev extends HTTP {
  prevs(index,list){
    // console.log(index)
    if(index <= 2){
      index = 2
    }
    let key = index - 1
    let key1 = `class-${key}`
    console.log(key1)
    var ss = wx.getStorageSync(key1)
    if(ss == ''){
      this.request({
        url: "classic/" + index + "/previous",
        success: res => {
          // console.log(res)
          list(res)
          wx.setStorageSync(key1,res)
        }
      })
    }else{
      list(ss)
    }
   
  }
}
export { prev }