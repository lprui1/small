
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      search(e){
        console.log(e.detail.value)
        let data = e.detail.value
        this.triggerEvent('search',{
          data
        })
      }
  }
})
