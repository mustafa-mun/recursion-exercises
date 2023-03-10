function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

function merge(a, b) {
  const output = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      output.push(a[i]);
      i++;
    } else {
      output.push(b[j]);
      j++;
    }
  }

  for (let index = i; index < a.length; index++) {
    output.push(a[index]);
  }

  for (let index = j; index < b.length; index++) {
    output.push(b[index]);
  }

  return output;
}

console.log(mergeSort([1, 4, 2, 7, 3, 8, 6]));
