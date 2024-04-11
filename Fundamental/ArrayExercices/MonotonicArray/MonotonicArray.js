var isMonotonic = function(nums) {
    
    let cresc = true
    let decres = true

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > nums[i - 1]){
            decres = false
        }
        if (nums[i] < nums[i - 1]){
            cresc = false
        }
    }

    return cresc || decres

};