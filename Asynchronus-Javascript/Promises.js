// How to produce a promise

let myPromise = new Promise(function (resolve, reject) {

    let a = 4;
    let b = 4;

    setTimeout(() => {

        if (a == b) {

            resolve('The value is equal');
        }
        else {

            reject('The value is not equal');
        }
    }, 2000);
})

// this is show pending state
// console.log(myPromises);

//fulfilles - then method
myPromise.then(function(result){

    console.log(result);
})

//rejected - catch method
myPromise.catch(function(failedResult){

    console.log(failedResult);
})