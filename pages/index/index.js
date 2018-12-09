import { http } from '../../models/index.js'
import { likehttp } from '../../models/like.js'
import { prev } from '../../models/previou.js'
let prevss  = new prev()
let https = new http()
let likehttps = new likehttp()

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:{}
  },
  //事件处理函数
  prev:function(ev){
    let index = ev.detail.data
    prevss.prevs(index,res => {
        // console.log(res)
        this.setData({
          list:res.data
        })
    })
  },
  onlike :function(ev){
    // console.log(ev.detail.behavior)
      let behavior = ev.detail.behavior
      let { id , type } = this.data.list
      likehttps.like(behavior,id,type)
      
  },
  onnext: function () {
    let index = this.data.list.index
      // console.log(this.data.list)
    if (index >= 8) {
      index = 7
    }
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/' + index +'/next',
      header: {
        'content-type': 'application/json',
        "appkey": '5ZbxAY1FmDNQP1T1'
      },
      success:(res => {
        this.setData({
          list: res.data
        })
      })
    })
  },
  onLoad: function () {
      https.modelindex(res => {
        // console.log(res)
        this.setData({
          list:res.data
        })
      })
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
