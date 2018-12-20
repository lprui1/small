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
    likenum:'',
    avatarUrl: "",//用户头像
    nickName: "",//用户昵称
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*喜欢列表 */
    https.modelindex(res => {
      this.setData({
        prelist:res.data
      })
    }),
    /*喜欢数量 */
    httpTwo.modelindex(res => {
      this.setData({
        likenum: res.data.count
      })
    })
    var that = this;
    wx.getSetting({
      success(data){
        // console.log(data)
        if(data.authSetting['scope.userInfo']){
          //授权成功，可以直接调用getUserInfo获取头像昵称
          wx.getUserInfo({
            success(data) {
              avatarUrl: data.userInfo.avatarUrl
              nickName: data.userInfo.nickName
            }
          })
        }
      }
    })
  },
  getUserInfo(event) {
    console.log(event)
  },
  bindGetUserInfo(e) {
    console.log(e)
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      nickName: e.detail.userInfo.nickName,
    })
  },
  // login: function(ev) {
  //   this.setData({
  //     avatarUrl: ev.detail.message.avatarUrl,
  //     nickName: ev.detail.message.nickName,
  //   })
  // },
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
    // //显示顶部刷新图标
    // wx.showNavigationBarLoading();
    // var that = this;

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