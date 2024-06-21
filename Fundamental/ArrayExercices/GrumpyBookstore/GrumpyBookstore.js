/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    
    let baseSatisfaction = 0;
    for (let i = 0; i < n; i++) {
        if (!grumpy[i]) {
            baseSatisfaction += customers[i];
        }
    }
    
    let additionalSatisfaction = 0;
    let maxAdditionalSatisfaction = 0;
    
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
            additionalSatisfaction += customers[i];
        }
    }
    
    maxAdditionalSatisfaction = additionalSatisfaction;
    
    for (let i = minutes; i < n; i++) {
        if (grumpy[i]) {
            additionalSatisfaction += customers[i];
        }
        if (grumpy[i - minutes]) {
            additionalSatisfaction -= customers[i - minutes];
        }
        
        maxAdditionalSatisfaction = Math.max(maxAdditionalSatisfaction, additionalSatisfaction);
    }
    
    return baseSatisfaction + maxAdditionalSatisfaction;
};