import { HTTP } from '../utils/http.js'

class http extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'classic/latest',
      success: res => {
        console.log(res)
        callback(res)
      } 
    })
  }
}
export { http }