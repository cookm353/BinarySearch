function findFloor(nums, target) {
    let low = 0
    let high = nums.length - 1

    if (target < nums[low]) return -1
    if (target > nums[high]) return nums[high]

    while (low <= high) {
        let mid = Math.floor(low + (high + low) / 2)

        if (nums[mid] > target) {
            if (nums[mid - 1] < target) {
                return mid - 1
            } else {
                high = mid - 1
            }
        } else if (nums[mid] < target) {
            if (nums[mid + 1] > target) {
                return mid + 1
            } else {
                low = mid + 1
            }
        }
    }
}

module.exports = findFloor