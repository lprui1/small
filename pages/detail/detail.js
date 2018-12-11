/*短评 */
import { duanping } from '../../models/detail/duanping.js'
let duanpings = new duanping()
/*详情*/
import { Index } from '../../models/detail/index.js'
let Indexs = new Index()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detlist:{},
    dps:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*详情 */
    let ids = options.id
    Indexs.xiangqing(ids,res => {
      this.setData({
        detlist: res.data
      })
      /*短评 */
      duanpings.dp(ids,res => {
        this.setData({
          dps: res.data.comments
        })
        console.log(this.data.dps)
      })
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

  },
  details(ev) {
    console.log(ev)
  }
})