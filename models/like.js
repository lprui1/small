import { HTTP } from '../utils/http.js'

class likehttp extends HTTP{
    like(behavior,artid,category){
      console.log(behavior)
      let url = behavior == "like" ? "like" : "like/cancel"
      this.request({
        url,
        method:'post',
        data:{
          art_id:artid,
          type:category     
             },
             success:res => {

             }
      })
  }
}
export { likehttp }