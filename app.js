const memory = require("./memory");
const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);

  //Array { length: 1, ptr: 0, capacity: 3 }

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // Array { length: 6, ptr: 3, capacity: 12 }
  // it added on new elements which eventually made it go over its initial size, which then lead it to resize and increase in all criteria. this happened twice until it hit a size that was able to handle all the elements.

  arr.pop();
  arr.pop();
  arr.pop();
  // Array { length: 3, ptr: 3, capacity: 12 }
  // This reduced only the length of the array, because what we have only resizes it if it increases in size. our ptr and capacity stayed the same so we can add new elements to the array later.

  // 4. Understanding more about how arrays work

  // Print the 1st item in the array arr.
  console.log("PRINT", arr[0]);

  // Empty the array and add just 1 item: arr.push("tauhida");
  arr = [];
  arr.push("tauhida");

  // Print this 1 item that you just added. What is the result? Can you explain your result?

  // What is the purpose of the _resize() function in your Array class?
  // to resize the whole array when the size/length of it gets to a certain point.

  console.log(arr);
}

function urlString(str) {
  return str.split(" ").join("%20");
}
// console.log(urlString("tauhida parveen"));
// console.log(urlString("www.thinkful.com /tauh ida parv een"));

// 6. filter an array
function filterArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(filterArray([1, 6, 3, 2, 12, 11, 7, 6]));

// 7. Max sum in array
function maxSum(arr) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(sum, maxSum);
    sum = 0;
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      console.log(sum, maxSum);
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  console.log(sum, maxSum);
  return maxSum;
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
// is this cheating? idk
function mergeArray(arr1, arr2) {
  let merged = arr1.concat(arr2);
  return merged.sort(function(a, b) {
    return a - b;
  });
}

// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 7, 8, 10]));

function removeCharacters(string, chars) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let present = true;
    for (let j = 0; j < chars.length; j++) {
      console.log(i, j);
      if (string[i] === chars[j]) {
        present = false;
      }
    }
    if (present) {
      output += string[i];
    }
  }
  return output;
}

// console.log(
//   removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou")
// );

function products(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
      if (i !== j) {
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}
// console.log(products([1, 3, 9, 4]));

function twoDArray(arr) {
  let output = [];
  let rowCheck = [];
  let columnCheck = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      // column check, checking the first index point of rows
      console.log(arr[i], j);
      if (arr[i][j] === 0) {
        rowCheck[i] = true;
        columnCheck[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!output[i]) {
      output[i] = [];
    }
    for (let j = 0; j < arr[0].length; j++) {
      if (rowCheck[i] || columnCheck[j]) {
        output[i][j] = 0;
      } else {
        output[i][j] = 1;
      }
    }
  }
  return output;
}
// console.log(
//   twoDArray([
//     [1, 0, 1, 1, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1]
//   ])
// );

function stringRotate(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let fullStr = str1 + str1;
  console.log(fullStr);
  if (fullStr.indexOf(str2) === -1) {
    console.log(fullStr, str2);
    return false;
  } else {
    return true;
  }
}
console.log(stringRotate("amazon", "azonma"));
