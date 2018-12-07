import { HTTP } from '../utils/http.js'
class prev extends HTTP {
  prevs(index,list){
    console.log(index)
    this.request({
      url:"classic/"+index+"/previous",
      success:res => {
        console.log(res)
          list(res)
      }
    })
  }
}
export { prev }