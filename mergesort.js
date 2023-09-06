function mergeSort (array) {
    if(array.length < 2) {
        return array;
    }
    else {
        // Recursively cut arrays in half until length of array is less than 2 (base case).
        let midPoint = Math.floor(array.length / 2);
        let leftSide = mergeSort(array.slice(0, midPoint));
        let rightSide = mergeSort(array.slice(midPoint));
        
        return merge(leftSide, rightSide);
    }
}

function merge (leftSide, rightSide) { {
   let sortedArray = [];

    while (leftSide.length && rightSide.length) {
        // Compare first element of each side's array
        if (leftSide[0] < rightSide[0]) {
            // remove first element of array and push into sorted array
          sortedArray.push(leftSide.shift());
        } else {
          sortedArray.push(rightSide.shift());
        }
      }
      // Use spread operators to create a new array, beginning with sorted element(lowest value) combining remaining elements.
      return [...sortedArray, ...leftSide, ...rightSide];
    }
}

let sampleArray = [-1, -12, 0, 19, 3, 2, -17, 23, 21];
console.log(mergeSort(sampleArray));