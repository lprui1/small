import { HTTP } from '../utils/http.js'

class http extends HTTP{
  modellike(res){
      this.request({
        url:'',
        success:res => {
          console.log(res)
        }
      })
  }
}