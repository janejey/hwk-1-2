//1
function arr (start, end, length) {
  let result = [];
  for (let i = start; i <= end; i += (end - start) / (length-1)) {
    result.push(i)
  }  return result
}
console.log(arr(10, 100, 3))
console.log(arr(1, 5, 1))
console.log(arr(1, 5, 6))

//2
function arrEl(arr){
  let arr2 = arr.slice().sort((a, b) => a - b);
  let secEl = arr2[arr2.length - 2];
  return arr.indexOf(secEl);
}
console.log(arrEl([23,  -98, 0, -456, 12, 8]))

//3
function repeatArray (arr, padAmount, repeat) {
  if (padAmount > arr.length) {
    return 'Invalid padding amount'
  } else {
    let start = arr.slice(0, padAmount);
    let end = arr.slice(arr.length - padAmount, arr.length);
    for (let i = 0; i < repeat; i++) {
     arr.unshift(start)
      arr.push(end)
     }
  }
  return arr.flat()
}
console.log(repeatArray([1,2,3,4], 1, 3))

//4
function largerArr (arr, el) {
  let newArr = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > el) {
      newArr.push(arr[i])
    } 
  } if (newArr.length === 0) {
    return 'Such values do not exist.'
  }
  return newArr
}
console.log(largerArr([1, 1, 2, -3, 0, 8, 4, 0], 9))

//5
function evenNumbers(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    let evennum = true;
    let nums = i + '';
    for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 1) {
      evennum = false;
      break;
    }
  } if (evennum === true) {
    result.push(i)
  }
  } if (result.length > 0) {
    return result.join(',')
  } else {
    return 'Such numbers does not exist.'
  }
}
console.log(evenNumbers(19, 42))
console.log(evenNumbers(99, 199))