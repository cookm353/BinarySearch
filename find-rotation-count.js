function findRotationCount(nums) {
    let low = 0
    let high = nums.length - 1

    if (nums[low] < nums[high]) {
        return low
    } else if (nums[high] < nums[low] && nums[high] < nums[high - 1]) {
        return high
    }
    
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        const midVal = nums[mid]
        
        if (midVal < nums[mid - 1] && midVal < nums[mid + 1]) {
            return mid
        } else if (midVal > nums[high]) {
            low = mid + 1
        } else if (midVal < nums[low]) {
            high = mid - 1
        }
    }
}

module.exports = findRotationCount

const nums = [7, 9, 11, 12, 5]
const result = findRotationCount(nums)
console.log(result)