// hoisting
// getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// task write the above arrow function as a one-liner
const getRandomIntArrowFunctionOneLiner = 
(min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

                            //string //callback function
function genericActionsPerfomer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;

//task write code below so that you console log "Alex is running"

const runningResult = genericActionsPerfomer("Alex", running);

console.log(runningResult);

// task create a single line below that console.log "Louis is eating"

console.log(genericActionsPerfomer("Louis", (name) => `${name} is eating`));

