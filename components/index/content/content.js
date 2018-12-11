// components/content/content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: String
    },
    content: {
      type:String
    },
    types: {
      type:String,
      observer(newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
        let val = newVal == 100 ? '电影' : '' || newVal == 200 ? '音乐' : '' || newVal == 300 ? '句子' : ''
        // 千万不要在一个observer函数中去修改属性本身的值，否则的话很有可能引起无限递归造成内存泄漏的情况。
        var dateList = val.split("");
        var arr = []
        for (var i in dateList) {
          arr = arr.concat(dateList[i]);
        }
        this.setData({
          typea: arr[0],
          typeb: arr[1]
        })
      }
    },
    ids:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typea:'',
    typeb:'',
    plays:true,
    yesSrc:'images/zt.jpg',
    noSrc:'images/bf.jpg',
    ids:'',
    types:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*播放*/
    audioPlay: function () {
      console.log(this.properties)
      let { plays } = this.properties
      this.setData({
        plays:!plays
      })
      this.triggerEvent(
        'play'
      )
    },
    /*暂停播放 */
    audioPause: function () {
      let { plays } = this.properties
      this.setData({
        plays: !plays
      })
      this.triggerEvent(
        'playa'
      )
    }
  }
})
