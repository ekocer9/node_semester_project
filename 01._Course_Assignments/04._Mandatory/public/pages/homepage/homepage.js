
// --------Arrays----------
const arrays = [
    "const letters = ['a', 'b', 'c']; console.log(letters[1])",
    "const friends = [] friends.push({ name: 'Hans'}); friends.push({ name: 'Peter'}); friends.push({ name: 'Frank'});",
    "const significantMathNumbers = [0, 2.718, 3.14159, 1729]; const indexNumber = significantMathNumbers.indexOf(1729);",
    "const diet = ['tomato', 'cucumber', 'rocket']; diet.splice(2, 0, 'hamburger', 'soda', 'pizza'); console.log(diet)"
]

function updateArrays() {
    const factIndex = Math.floor(Math.random() * arrays.length);
    document.getElementById('arrayExercises').textContent = arrays[factIndex];
}

setInterval(updateArrays, 5000)
updateArrays()

// --------Basics----------

const basics = [
    "const firstName = 'Anders'; const lastName = 'Latif'; const fullName = `My first name is ${firstName} and my last name is ${lastName}`",
    "const year = '2023'; const increment = 1; const newYear = +year + increment"
]

function updateBasics() {
    const factIndex = Math.floor(Math.random() * basics.length);
    document.getElementById('basicExercises').textContent = basics[factIndex];
}

setInterval(updateBasics, 5000)
updateBasics()

// --------Objects----------

const objects = [
    "const myObject = { message: 'Hello, earthling! I bring peace.' }; console.log(myObject.message)",
    "const nameObject = { Name: 'Enes Kocer' , Age: 23}; console.log(nameObject)",
    "const stackOverflow = {}; stackOverflow.isAllowed = true; console.log(stackOverflow)",
    "const thisSong = { description: 'The best song in the world.' }; delete thisSong.description; thisSong.about = 'Just a tribute'; console.log(thisSong)"
]

function updateObjects() {
    const factIndex = Math.floor(Math.random() * objects.length);
    document.getElementById('objectExercises').textContent = objects[factIndex];
}

setInterval(updateObjects, 5000)
updateObjects()

// --------Strings----------

const strings = [
    "const numberOne = '1.10'; const numberTwo = '2.30'; const newNumber = parseFloat(numberOne) + parseFloat(numberTwo)",
    "const anotherNumberOne = '1.10'; const anotherNumberTwo = '2.30'; const anotherNewNumber = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo); const formattedNewNumber = anotherNewNumber.toFixed(2)",
    "const one = 10; const two = 45; const three = 98; const calculateSum = one + two + three; const calculateAvg = calculateSum / 3; const formattedAvg = calculateAvg.toFixed(5)"
]

function updateStrings() {
    const factIndex = Math.floor(Math.random() * strings.length);
    document.getElementById('stringsExercises').textContent = strings[factIndex];
}

setInterval(updateStrings, 5000)
updateStrings()
