// components/detail/jianjie/jianjie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:String,
      observer(newVal, oldVal, changedPath){ 
        console.log(newVal)
      //   let str = newVal.replace(/\\n/g,'')
      //   this.setData({
      //     content: str
      //   })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
