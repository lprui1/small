// components/index/music/music.js
var audioCxt;
//动画
var audioAnimation;
audioCxt = wx.createInnerAudioContext();
const backgroundAudioManager = wx.getBackgroundAudioManager()

Component({
  ready:function() {
    wx.getBackgroundAudioPlayerState({
      success: res => {
        console.log(res)
        if (res.status === 1) {
          //正在播放
          if (res.dataUrl == this.data.url){
            this.setData({
              plays:false,
              music_on:true,
              music_playing:true
            })
          }
        }

        if (res.status === 0) {
          //未播放状态
        }

      },
      fail: err => {
        //未播放任何音乐
      }
    })
    backgroundAudioManager.onPause(() => {
      this.data.music_on = true;
      this.data.music_playing = false;
      let { plays } = this.properties
      this.setData({
        plays: !plays,
        music_on: this.data.music_on,
        music_playing: this.data.music_playing
      })
    })

  },

  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: String
    },
    content: {
      type: String
    },
    types: {
      type: String,
      observer(newVal, oldVal, changedPath) {
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
    title:{
      type:String
    },
    url:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    typea: '',
    typeb: '',
    title:'',
    url:'',
    urls:'',
    plays: true,
    yesSrc: 'images/zt.jpg',
    noSrc: 'images/bf.jpg',
    audioAnimation: null,
    music_on: true,
    music_playing: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    audioPlay: function () {
      let { plays } = this.properties
      if (plays==true){
        backgroundAudioManager.title = this.data.title
        backgroundAudioManager.src = this.data.url
        
        backgroundAudioManager.onPlay(() => {
          console.log(backgroundAudioManager.src)
          console.log("音乐播放开始");
          this.data.music_on = true;
          this.data.music_playing = true;
          let { plays } = this.properties
          this.setData({
            plays: !plays,
            music_on: this.data.music_on,
            music_playing: this.data.music_playing,
            urls: backgroundAudioManager.src
          })
          console.log(this.data.urls)
        })
      } else if (plays == false) {
        backgroundAudioManager.pause()
        backgroundAudioManager.onPause(() => {
          console.log('音乐暂停了')
          this.data.music_on = true;
          this.data.music_playing = false;
          let { plays } = this.properties
          this.setData({
            plays: !plays,
            music_on: this.data.music_on,
            music_playing: this.data.music_playing
          })
        })
      }
    }
  }
})
