// pages/Indexdetail/index.js
import { likehttp } from '../../models/index/like.js'
let likehttps = new likehttp()

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    let type = options.type
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/'+type+'/'+id,
      header: {
        'content-type': 'application/json',
        "appkey": '5ZbxAY1FmDNQP1T1'
      },
      success:(res => {
        this.setData({
          list:res.data
        })
      })
    })
  },
  onlike: function (ev) {
    let behavior = ev.detail.behavior
    let { id, type } = this.data.list
    likehttps.like(behavior, id, type)
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