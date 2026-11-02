const nums = [4, 2, 7, 2, 9, 4];
console.log("Unique:", [...new Set(nums)]);
console.log("Ascending:", [...nums].sort((a,b)=>a-b));
console.log("Largest:", Math.max(...nums));
console.log("Sum:", nums.reduce((a,b)=>a+b,0));

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === [...cleaned].reverse().join("");
}
function countVowels(text) {
  return (text.match(/[aeiou]/gi) || []).length;
}
function titleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}
console.log(isPalindrome("Never odd or even"));
console.log(countVowels("JavaScript"));
console.log(titleCase("web development assignment"));
