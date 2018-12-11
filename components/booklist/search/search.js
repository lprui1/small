
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
      show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
      search(e){
        let data = e.detail.value
        this.triggerEvent('search',{
          data
        })
      },
      sear(){
          this.setData({
            show:true
          })
      },
      qxs(){
        this.setData({
          show: false
        })
      }
  }
})
