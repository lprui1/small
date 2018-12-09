import { HTTP } from '../../utils/http.js' 
class prev extends HTTP {
  prevs(index,list){
    // console.log(index)
    if(index <= 2){
      index = 2
    }
    this.request({
      url:"classic/"+index+"/previous",
      success:res => {
        // console.log(res)
          list(res)
      }
    })
  }
}
export { prev }