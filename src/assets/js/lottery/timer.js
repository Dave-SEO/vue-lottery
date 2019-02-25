class Timer {
    countdow(end, update, handle) {
        // 获取当前时间
        const now = new Date().getTime()
        let self = this
        // 现在时间大于结束时间，说明已经结束
        if(now - end){
            // call第一个参数是this要指向的对象，也就是想指定的上下文
            call()
            // 语法：
            // call([thisObj[,arg1[, arg2[, [,.argN]]]]])
            // 定义：调用一个对象的一个方法，以另一个对象替换当前对象。
            // 说明： call 方法可以用来代替另一个对象调用一个方法。
            // call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
            // thisObj的取值有以下4种情况：
            // （1） 不传，或者传null,undefined， 函数中的this指向window对象
            // （2） 传递另一个函数的函数名，函数中的this指向这个函数的引用
            // （3） 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
            // （4） 传递一个对象，函数中的this指向这个对象
            handle.call(self)
        } else {
            // 剩余时间(毫秒)
            let lastTime = end - now
            //把时分秒转换为毫秒
            const px_d = 1000* 60 * 60 *24
            const px_h = 1000 *60*60
            const px_m = 1000 * 60
            const px_s = 1000
            let d = Math.floor(lastTime / px_d)
            // d * px_d 把天转换为毫秒
            let h = Math.floor((lastTime - d * px_d) / px_h)
            let m = Math.floor((lastTime - d * px_d -h * px_h) / px_m)
            let s = Math.floor((lastTime - d * px_d -h * px_h - m * px_m) / px_s)
            let r = []
            if(d > 0){
                r.push(`<em>${d}</em>天`)
            }
            if(r.length || h > 0){
                r.push(`<em>${h}</em>时`)
            }
            if(r.length || m > 0){
                r.push(`<em>${m}</em>分`)
            }
            if(r.length || s > 0){
                r.push(`<em>${s}</em>秒`)
            }
            self.lastTime = r.join("")
            update.call(self, r.join(""))
            setTimeout(()=>{
                countdow(end, update, handle)
            }, 200)
        }
        
    }
}