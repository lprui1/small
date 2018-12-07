import { http } from '../../models/index.js'
import { likehttp } from '../../models/like.js'
import { nextModel } from '../../models/content.js'
let https = new http()
let likehttps = new likehttp()
let nextModels = new nextModel()

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:{}
  },
  //事件处理函数
  onlike :function(ev){
    // console.log(ev.detail.behavior)
      let behavior = ev.detail.behavior
      let { id , type } = this.data.list
      likehttps.like(behavior,id,type)
      
  },
  onnext :function(){
    let { index } = this.data.list
    console.log(index)
    nextModels.next(index)
    
  },
  onLoad: function () {
    https.modelindex(res => {
      console.log(res)
      this.setData({
        list:res.data
      })
    })
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
