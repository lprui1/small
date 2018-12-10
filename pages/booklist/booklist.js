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
    idlist:[]
  },
  searchs: function (ev) {
      console.log(ev)
      let searchlist = ev.detail.data
    searchhttps.search(searchlist,res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    hotlists.modelindex(res => {
      console.log(res)
      this.setData({
        list: res.data
      })
      for (let i of res.data) {
        // console.log(i.id)
        this.data.idlist.push(i.id)
        // console.log(this.data.idlist)
      }
    }),
      shortComments.modelindex(res => {
        // console.log(res)
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