 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      shows:{
        type:Boolean
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      show:false,
      showa:false
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
      },
      sear(){
          this.setData({
            show:true
          })
          let shows = this.data.show
            this.triggerEvent('searchlist', {
                shows
            })
      },
    sears() {
      this.setData({
        showa: true
      })
      let shows = this.data.showa
      this.triggerEvent('searchlists', {
        shows
      })
    }
  }
})
