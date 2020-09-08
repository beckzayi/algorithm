/**
 * Description: if the current one is larger than the next, swap values.
 * [3, 4, 1, 2]: first check [3, 1, 4, 2], second check [3, 1, 2, 4], first loop completes, and then the second loop starts.
 * @method bubbleSort
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] > arr[k + 1]) {
                var temp = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = temp;
            } 
        }
    }
    return arr;
}

export default bubbleSort;
