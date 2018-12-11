import { searchhttp } from '../../../models/booklist/search.js'
let searchhttps = new searchhttp()
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
      list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    qxs() {
      this.setData({
        show: false
      })
      let shows = this.data.show
      this.triggerEvent('searchlist', {
        shows
      })
    },
    search(e) {
      console.log(e.detail.value)
      let data = e.detail.value
      if(data != ""){ 
        searchhttps.search(data, res => {

          this.setData({
            list: res.data.books
          })
          console.log(this.data.list)
        })
      }else{
        this.setData({
          list: []
        })
      }
     
    }
  }
})
