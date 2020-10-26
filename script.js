//Deel A:
//Adding an Element to the array
let array = []
let addTheWordCool = () => array.push("cool")
addTheWordCool()
console.log(array)

//Deel B:
//Check Amount of Elements in Array
let array2 = ["nice", "cool", "awesome", "tof"]
let amountOfElementsInArray = () => array2.length
console.log(amountOfElementsInArray())

//Deel C:
//First element in array
let array3 = ["nice", "cool", "awesome", "tof"]
let firstElementInArray = () => array3[0]
console.log(firstElementInArray())

//Deel D:
//Last element in array
//No Mutation
let array4 = ["nice", "cool", "awesome", "tof"]
let lastElementInArray = () => array4.slice(-1)[0]
console.log(lastElementInArray())

//Deel E:
let array5 = ["nice", "cool", "awesome", "tof"]
//slice won't Mutate the original array
let deleteFirstElement = () => array5.slice(1);
console.log(deleteFirstElement())
//splice will Mutate the original array
let deleteFirstElementAndMutate = () => array5.splice(1);
console.log(deleteFirstElementAndMutate())


//Deel F:
//No Mutation
let array6 = ["nice", "cool", "awesome", "tof"]
let joinString = () => array6.join(" ")
console.log(joinString())

//Deel G: 
//No Mutation
var array7 = ['nice', 'cool', 'awesome', 'tof'];
var array8 = ['yo', 'yi', 'yes'];
let joinArrays = () => array7.concat(array8)
console.log(joinArrays());