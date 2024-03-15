// asynchronous code:
// Browser event handlers, network calls, buffers / streams, 
// working with files / directories, setTimeout / setInterval, 
// databases

// Javascript one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell, Pyramid of Doom

// Solution 2. Promises
// states:
// 1. pending
// 2. fulfilled
//  -> resovled
//  -> rejected

// Solution 3. Async/Await
// syntactic sugar

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("some error")
            resolve("Everything OK")
        } catch (error) {
            console.log(error);
            reject("Nothing OK")
        }
    }, 2000);
})
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage))

// Create a promisified function
// that is, a function that returns a new promise
// it should be called myPromise
// and it should either resolve as "Something Good" or reject as "Something Bad"
// create a 3 second timeout to simulate asynchronous behavior

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw "Oh No";
                resolve("Something Good")
            } catch(error) {
                console.log(error);
                reject("Something Bad")
            }
        }, 3000)
    })
}

myPromise()
.then((successMessage) => console.log(successMessage))
.then((errorMessage) => console.log(errorMessage));

// assignment
// try to simulate the fetch funtion
// call it myFetch
// it should return the promise json() so that you can call response.json() on it
// as much as possible try to imagine how fetch works and simulate the underlying code

function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve({
                    json: () => new Promise((resolve, reject) => resolve("Response from "))
                })
            }catch {
                reject()
            }
        }, 2500)
    })
}

myFetch("https://www.domain.com")
.then((response) => response.json())
.then((result) => console.log(result));

// IIFE
(async function main() {
    try {
        const myPromiseResult = await myPromise()
        console.log(myPromiseResult);
    }catch(error) {
        console.log(error);
    }
})()

// async function main() {
//     try {
//         const myPromiseResult = await myPromise()
//         console.log(myPromiseResult);
//         return myPromiseResult
//     }catch(error) {
//         console.log(error);
//         return "Error";
//     }
// }

// async function wrapper() {
//     const result = await main();
//     console.log(result);
// }

// wrapper();