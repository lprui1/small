import { HTTP } from '../../utils/http.js'
class Index extends HTTP {
  xiangqing(id,callback) {
    let ids = id
    this.request({
      url: '/book/'+ids+'/detail',
      success: res => {
        callback(res)
      }
    })
  }
}
export { Index }