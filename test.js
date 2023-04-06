const arr = [1, 2, 3, 4, 5, 6, 7]

const result = arr.forEach(num => {
  num * 2
});

console.log(result)

const mapArr = arr.map(num => num * 2);
console.log(mapArr)

const filterArr = arr.filter(num => num % 2 === 0)
console.log(filterArr)