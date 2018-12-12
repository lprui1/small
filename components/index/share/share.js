// components/share/share.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    code:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      src:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    login:function(e) {
      let message = e.detail.userInfo
      this.triggerEvent(
        'logins',
        {
          message
        }
      )
    }
  }
})
