const students = ["harry", "racheal", "john", "joy"];
const rollCall = students.map(function(student){
    console.log(student + " the computer wizard");
})

const names = ["Helen", "Mohammed", "John"]
names.forEach((name, index, array) => {
    console.log(`Hello! ${name} ${index}`)
})

const ages = [23,12,45,67];
const filteredAge = ages.filter((age) => age > 18);
console.log(filteredAge);

const array1 = [1,2,3,4,5];
const reducer = array1.reduce(function(accumulator, currentValue){
    return currentValue + accumulator ;
})

const foods = ['rice', 'yam', 'spaghetti', 'beans'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(foods, 'potaotes');   // false
checkAvailability(fruits, 'rice'); // true

function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true