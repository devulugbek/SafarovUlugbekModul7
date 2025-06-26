//1. Unikal qiymatlar soni

function countUnique(arr) {
  const uniqueValues = new Set(arr);
  return uniqueValues.size;
}

// Test cases
console.log(countUnique([1, 2, 2, 3, 3])); // 3
console.log(countUnique([4, 4, 4, 4, 4])); // 1


//2. Bosh harfni katta qilish
 
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Test cases
console.log(capitalizeWords("salom dunyo"));       // "Salom Dunyo"
console.log(capitalizeWords("men dasturchiman"));  // "Men Dasturchiman"

//3. Palindrom tekshirish


function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Test cases
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false


