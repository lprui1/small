// pages/booklist/booklist.js
import { searchhttp } from '../../models/booklist/search.js'
let searchhttps = new searchhttp()
import { hotlist } from '../../models/booklist/selection.js'
import { shortComment } from '../../models/booklist/short_comment.js'
let hotlists = new hotlist()
let shortComments = new shortComment()

const app = getApp() 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    idlist:[],
    shows:false,
    pageIndex:0
  },
  searchs: function (ev) {
      // console.log(ev)
      
  },
  show:function(ev){
    let show = ev.detail.shows
    this.setData({
        shows:show,
    })
  },
  showa: function (ev) {
    let show = ev.detail.shows
    this.setData({
      // showsa: show
    })
  },
  id: function (ev) {
    // console.log(ev.detail.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    hotlists.modelindex(res => {
      this.setData({
        list: res.data
      })
      for (let i of res.data) {
        this.data.idlist.push(i.id)
      }
    }),
      shortComments.modelindex(res => {
        
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
    //显示顶部刷新图标
    // wx.showNavigationBarLoading();
    var that = this;
    hotlists.modelindex(res => {
      console.log(res)
    })
    that.setData({
      //每次触发下拉事件pageIndex = 0
      pageIndex:0,
    })
    // console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    that.setData({
      pageIndex:5
    })
    // wx.showLoading({
    //   title: '玩命加载中',
    // })
    //隐藏加载框
    // wx.hideLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})