function countZeroes(nums) {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    let numZeroes = 0

    if (nums[0] === 0) {
        return nums.length
    } else if (nums[rightIndex] === 1 ) {
        return 0
    }

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        let midVal = nums[midIndex]

        if (midVal === 0 && nums[midIndex - 1] === 1) {
            numZeroes = nums.length - midIndex
            return nums.length - midIndex
        } else if (midVal === 0 && nums[midIndex - 1] === 0) {
            rightIndex = midIndex - 1
        } else {
            leftIndex = midIndex + 1
        }
    }
}

module.exports = countZeroes