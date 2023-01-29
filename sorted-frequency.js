function sortedFrequency(nums, val) {
    let valCount = 0

    for (let num of nums) {
        if (num === val) {
            valCount += 1
        }
    }

    return valCount > 0 ? valCount : -1
}

module.exports = sortedFrequency