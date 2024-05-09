/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: if the array is empty, return 1 (identify element for multiplication)
  if (nums.length === 0) return 1;
  
  // Recursive call: multipli the first element with the product of the rest of the array
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the array is empty, return 1 (identify element for multiplication).
  if (nums.length === 0) return 1;

  // Recursive call: multiply the first element with the product of the rest of the array
  // The recursive call passes a new array containing all elements except the first one
  return nums[0] * product(nums.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case: if the string is empty or has only one character, return the string
  if (str.length <= 1) {
    return str;
  }
  // Recursive call: concatenate the first character with the results of everyOther oneon the rest of the string.
  return str[0] + everyOther(str.slice(2));
  
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string has 0 or 1 characters, it's always a palindrome.
  if (str.length <= 1) {
    return true;
  }
  // Check if the first and last characters are the same.
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursive call: check if the substring without the first and last characters is a palindrome.
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base case: if index is greater than or equal to the array length, val is not present
  if (index >= arr.length) {
    return -1;
  }

  // Check if the current element is equal to val
  if (arr[index] === val) {
    return index;
  }

  // Recursive case: search for val in the rest of the array
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string has 0 or 1 characters, it's already reversed
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: reverse the substring without the first character and concatenate it with the first character
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings.push(...gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  // Helper function to perform binary search recursively
  function binarySearchRecursive(arr, val, left, right) {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (val < arr[mid]) {
      return binarySearchRecursive(arr, val, left, mid - 1);
    } else {
      return binarySearchRecursive(arr, val, mid + 1, right);
    }
  }

  // Call the recursive helper function with initial left and right indices
  return binarySearchRecursive(arr, val, 0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
