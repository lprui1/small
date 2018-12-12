// components/detail/mess/mess.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    Detlist:{
      type: Object
    },
    title:{
      type:String
    },
    data:{
      type:Number
    }
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
      prev(){
            let { data } = this.properties
            console.log(data)
        this.triggerEvent("pre",{
          data
        })
      }
  }
})
