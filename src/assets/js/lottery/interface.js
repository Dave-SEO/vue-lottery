
import axios from 'axios'
class Interface {
    getOmit (issue) {
        let self = this
        return new Promise((resolve, reject) => {
            axios.get('/get/omit',{
                params: issue
            }).then((res) => {
                self.setOmit(res.data)
                resolve(res.data)
            }).catch((e)=>{
                reject(e)
            })
        })
    }
    getOpenCode(issue){
        let self = this
        return new Promise((resolve, reject) => {
            axios.get('/get/opencode',{
                params: issue
            }).then((res) => {
                self.setOpenCode(res.data)
                resolve(res.data)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

    getState(issue){
        let self = this
        return new Promise((resolve, reject) => {
            axios.get('/get/state',{
                params: issue
            }).then((res) => {
                resolve(res)
                // resolve.call(self.res)
            }).catch((e)=>{
                reject(e)
            })
        })
    }

}
  
export default Interface