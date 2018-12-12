// components/prelike/prehead/prehead.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Likenum:{
      type:String
    },
    avatarUrls:{
      type:String
    },
    nickName:{
      type:String
    },
    // console.log(this.properties.coun)
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatarUrls:'',
    nickName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
   book() {
     console.log(this.properties.Likenum)
   }
  }
})
