import { HTTP } from '../../utils/http.js'

class searchhttp extends HTTP {
  search(q,callback) {
    this.request({
      url: 'book/search?q='+q,
      success: res => {
        callback(res)
      }
    })
  }
}
export { searchhttp }