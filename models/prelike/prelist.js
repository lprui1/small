import { HTTP } from '../../utils/http.js'
class http extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'classic/favor',
      success: res => {
       callback(res)
      }
    })
  }
}
export { http }