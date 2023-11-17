function findPivot(nums) {
    let low = 0
    let high = nums.length - 1

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2)
        const midVal = nums[mid]

        if (midVal < nums[low]) {
            high = mid
        } else if (midVal > nums[low] && midVal < nums[mid + 1]) {
            low = mid
        } else if (midVal > nums[mid - 1] && midVal > nums[mid + 1]) {
            return mid
        }
    }
}

function findRotatedIndex(nums, target) {
    let low, high
    const pivot = findPivot(nums)
    
    if (target > nums[0]) {
        low = 0
        high = pivot
    } else {
        low = pivot
        high = nums.length - 1
    }

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)

        if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] === target) {
            return mid
        }
    }

    return -1
}

module.exports = findRotatedIndex