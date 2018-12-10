import { http } from '../../models/index/index.js'
import { likehttp } from '../../models/index/like.js'
import { prev } from '../../models/index/previou.js'
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
    let index = Number(ev.detail.data)
    prevss.prevs(index,res => {
      console.log(res)
        this.setData({
          list:res.data
        })
    })
  },
  onlike :function(ev){
      let behavior = ev.detail.behavior
      let { id , type } = this.data.list
      likehttps.like(behavior,id,type)
      
  },
  onnext: function () {
    let index = this.data.list.index
    if (index >= 8) {
      index = 7
    }
    let key = index+1
    let key1 = `class-${key}`
    console.log(key1)
    var ss = wx.getStorageSync(key1)
    console.log(ss)
    if(ss == ''){
      wx.request({
        url: 'http://bl.7yue.pro/v1/classic/' + index + '/next',
        success: (res => {
          this.setData({
            list: res.data
          })
        })
      })
    }else{
      this.setData({
        list: ss.data
      })
    }
  },
  onLoad: function () {
      https.modelindex(res => {
        this.setData({
          list:res.data
        })
      })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
