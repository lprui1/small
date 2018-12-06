import { HTTP } from '../utils/http.js'

class http extends HTTP {
  modelindex(res) {
    this.request({
      url: 'classic/latest',
      success: res => {
        console.log(res)
      }
    })
  }
}
export { http }