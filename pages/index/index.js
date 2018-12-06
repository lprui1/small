import { http } from '../../models/index.js'

let https = new http()

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:{}
  },
  //事件处理函数
  
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
