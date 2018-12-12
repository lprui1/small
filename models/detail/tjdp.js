import { HTTP } from '../../utils/http.js'
class tjdp extends HTTP {
  subindex(book_id, content,callback) {
    console.log(book_id)
    console.log(content)             
    this.request({
      url: '/book/add/short_comment',
      data:{
        book_id: book_id,
        content: content
      },
      method:"POST",
      success: res => {
        callback(res)
      }
    })
  }
}
export { tjdp }