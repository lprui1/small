// components/selection/selection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    lists:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    details(ev) {
      let id = ev.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
      this.triggerEvent('lists',{
        id
      })
    }
  }
})
