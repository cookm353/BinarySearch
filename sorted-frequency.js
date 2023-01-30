function sortedFrequency(nums, target) {
    let leftIndex = 0
    let rightIndex = nums.length - 1

    // First and last indices of the target number
    let start, end

    // Handle edge cases
    if (target < nums[leftIndex] || target > nums[rightIndex]) {
        return -1
    } 
    if (nums[rightIndex] === target) {
        end = rightIndex
    } 
    if (nums[leftIndex] === target) {
        start = leftIndex
    }

    if (end && start) {
        return nums.length
    }

    while ( leftIndex <= rightIndex ) {
        let mid = Math.floor((leftIndex + rightIndex) / 2)
        
        // If mid value is less than target...
        if ( nums[mid] < target ) {
            // and the next number is equal to the target...
            if ( nums[mid+1] === target ) {
                leftIndex = mid + 1
                start = leftIndex
            } else {
                leftIndex = mid + 1
            }
        // If mid value is greater than target...
        } else if ( nums[mid] > target ) {
            // and the previous number is equal to the target...
            if ( nums[mid-1] === target ) {
                rightIndex = mid - 1
                end = rightIndex
            } else {
                rightIndex = mid - 1
            }
        // If mid value equals target...
        } else {
            // if the left isn't the starting position...
            if (nums[leftIndex] === target) {
                start = leftIndex
            } else {
                leftIndex += 1
            }
            // if the right isn't the end position...
            if (nums[rightIndex] === target) {
                end = rightIndex
            } else {
                rightIndex += 1
            }
        }

        if (start !== undefined && end !== undefined) {
            return end - start + 1
        }
    }
}

module.exports = sortedFrequency

const ans = sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)
// const ans = sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)
// const ans = sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)
// const ans = sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)
console.log(ans)