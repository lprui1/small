import { http } from '../../../models/index/like.js'
// components/like/index.js
Component({
  /**
  * 组件的属性列表
  */
  properties: {
    count: {
      type: Number
    },
    like: {
      type: Boolean
    }
  },
  /**
  * 组件的初始数据
  */
  data: {
    like: true,
    yesSrc: 'images/2.png',
    noSrc: 'images/1.png'
  },

  /**
  * 组件的方法列表
  */
  methods: {
    onlike() {
      let { like } = this.properties
      console.log(like)
      let {count} = this.properties
      count = like ? count - 1 : count + 1
      let love = wx.getStorageSync("key")
      let ss = wx.getStorageSync(love)
      ss.data.fav_nums = count
      ss.data.like_status = !ss.data.like_status
      wx.setStorageSync(love,ss)
      this.setData({
        like: !like,
        count
      })

      let behavior = this.properties.like ? 'like' : 'cancel'
      // console.log(behavior)
      this.triggerEvent(
        'like',//自定义事件 
        {
          behavior
        }
      )
    }
  }
})