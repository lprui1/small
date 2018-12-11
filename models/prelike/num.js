import { HTTP } from '../../utils/http.js'
class httptwo extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'book/favor/count',
      success: res => {
        // console.log(res)
        callback(res)
      }
    })
  }
}
export { httptwo }