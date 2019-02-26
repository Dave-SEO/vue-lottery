class calculate{
    /***
     * 计算注数
     * active: 当前选中号码的个数
     * play_name 当前的玩法标志（例如任三）
     * 返回值是计算好的注数
     */
    computerCount(active, play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr  = new Array(active).fill('0');
        if(exist && play_name.at(0) == 'r'){
            // 计算注数
            count = calculate.combine(arr, play_name.split("")[1]);
        }
        return count
    }
    /**
     * [computerBonus 奖金范围预测]
     * @param {number} active [当前选中的号码]
     * @param {String} play_name [当前的玩法标识]
     *  @return {Array}  [返回金额的范围]
     */
    computerBonus(active, play_name){
        // 1. 拿到当前玩法的基数
        const play = play_name.split("");
        const self = this;
        let arr = new Array(play[1]*1).fill(0);
        let min,max;
        if(play[0] === 'r'){
            // 最小命中数
            let min_active = 5 - (11 - active)
        }
    }
    /**
     * 静态方法
     * [combine 组合运算]
     * @param {array} arr [参与组合运算的数组]
     * @param {number} size [组合运算的基数]
     * @return {number}    [组合注数]
     * 递归的方式实现组合运算
     */
    static combine(arr, size){
        // 保存最后的结果
        let allResult = []
        (function f(arr, size, result){
            let arrLen = arr.length;
            if(size > arrLen){
                return
            }
            if(size === arrLen){
                allResult.push([].concat(result, arr))
            }else{
                for(let i = 0; i < arrLen; i++){
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size === 1){
                        allResult.push(newResult)
                    }else{
                        let newArr = [].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr, size - 1, newResult)
                    }
                }
            }

        })(arr, size, [])
    }
}
