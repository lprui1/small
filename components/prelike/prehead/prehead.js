// components/prelike/prehead/prehead.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likenum:{
      type:Number,
      observer(newVal, oldVal, changedPath){
        console.log(newVal)
      }
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
    nickName:'',
    likenum:''
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
