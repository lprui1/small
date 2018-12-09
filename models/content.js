import { HTTP } from '../utils/http.js'

class nextModel extends HTTP {
  next(index){
     index = index-1
     this.request({
       url: 'classic/'+index+'/next',
       method:'get',
       success:(res => {
        //  console.log(res)
         index(res)
       })
     })
   }
 }
 export {nextModel}