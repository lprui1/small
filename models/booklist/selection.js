import { HTTP } from '../../utils/http.js'

class hotlist extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'book/hot_list',
      success: res => {
        // console.log(res)
        callback(res)
      }
    })
  }
}
export { hotlist }