import { tjdp } from '../../../models/detail/tjdp.js'
let tjdps = new tjdp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number
    },
    Detlist: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dps:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dp(e) {
      this.setData({
        dps:e.detail.value
      })              
    },
    sub() {
      let book_id = this.properties.Detlist.id
      let content = this.data.dps
      tjdps.subindex(book_id, content,res => {
        console.log(res)
        if (res.data.error_code == 0) {
          wx.showToast({
            title: '评论成功',
            icon: 'success',
            duration: 2000
          })

        }else {
          wx.showToast({
            title: '评论失败',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  }
})
