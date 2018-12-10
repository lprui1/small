import { HTTP } from '../utils/http.js'

class nextModel extends HTTP {
  next(index){
    console.log(index)
      this.request({
        url: 'classic/' + index + '/next',
        method: 'get',
        success: (res => {
          index(res)
        })
      })
   }
 }
 export {nextModel}