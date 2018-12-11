// components/share/share.js
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
      music:function(){
             const back = wx.getBackgroundAudioManager();
        back.src = 'http://music.163.com/song/media/outer/url?id=29719651.mp3';
        back.title = '你是一只猪';
        back.coverImgUrl="./image/3.png";
        back.play();
        back.onPlay(() => {
          console.log('猪跑了')
        })
        back.onEnded(() => {
          console.log('猪回来了')
        })
      }
  }
})
