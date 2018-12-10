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
    likenum:{}
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