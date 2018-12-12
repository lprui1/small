import { http } from '../../models/prelike/prelist.js'
import { httptwo } from '../../models/prelike/num.js'
let https = new http()
let httpTwo = new httptwo()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prelist:[],
    lx:'',
    likenum:{},
    avatarUrl: "",//用户头像
    nickName: "",//用户昵称
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    https.modelindex(res => {
      this.setData({
        prelist:res.data
      })
    }),
    httpTwo.modelindex(res => {
      console.log(res.data)
      this.setData({
        likenum: res.data
      })
      // console.log(this.data.likenum)
    })
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              // console.log(res)
              // var avatarUrl = 'userInfo.avatarUrl';
              // var nickName = 'userInfo.nickName';
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName,
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      nickName: e.detail.userInfo.nickName,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})