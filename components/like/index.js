    import { http } from '../../models/like.js'
<<<<<<< HEAD

=======
>>>>>>> 5c2e0505c9658d7058496f5dd85b6d8c10f8365c
    

// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
<<<<<<< HEAD
    count: {
      type: Number
    },
    like: {
      type: Boolean
    }
=======

>>>>>>> 5c2e0505c9658d7058496f5dd85b6d8c10f8365c
  },

  /**
   * 组件的初始数据
   */
  data: {
<<<<<<< HEAD
    like: true,
    yesSrc: 'images/2.png',
    noSrc: 'images/1.png'
=======

>>>>>>> 5c2e0505c9658d7058496f5dd85b6d8c10f8365c
  },

  /**
   * 组件的方法列表
   */
  methods: {
<<<<<<< HEAD
    onlike() {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      this.setData({
        like: !like,
        count
      })
      this.triggerEvent(
        'like',//自定义事件
        {
          "name": "xin"
        }
      )
    }
=======

>>>>>>> 5c2e0505c9658d7058496f5dd85b6d8c10f8365c
  }
})
