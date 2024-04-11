/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    const k = [];
 
    nums.forEach((num) => {
        if (k.includes(num)) {
         
         const index = k.indexOf(num)
 
         k.splice(index , 1)
 
        } else {
            k.push(num)
        }
    })
 
    n = k[0]
 
     return n
 };