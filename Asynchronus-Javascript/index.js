let stocks = {

    fruits: ["Apple", "Banana", "Mango", "Orange"],
    liquide: ["water", "milk"],
    holder: ["cup", "stick", "cone"],
    toppings: ["chocolate", "peanuts"]

};

/* callbacks in javascript

let order = (call_production) => {

    setTimeout(() => {

        console.log(`${stocks.fruits[0]} was selected`);

        call_production()

    }, 1000)



};

let production = () => {

    setTimeout(() => {

        console.log("Production has started");

        setTimeout(() => {

            console.log("The fruits has been choped");

            setTimeout(() => {
                console.log(`${stocks.liquide[0]} and ${stocks.liquide[1]} was added`);

                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`icecream was placed on ${stocks.holder[2]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as topping`);

                            setTimeout(() => {

                                console.log("Serve Ice cream");

                            }, 2000)

                        }, 3000)

                    }, 2000)

                }, 1000)

            }, 1000)

        }, 2000)

    }, 0000)

};

order(production);

*/

//Promises in javascript

let is_shop_open = true;

let orders = (time, work)=>{

    return new Promise((resolve, reject)=>{

        if(is_shop_open){

            setTimeout(()=>{

            resolve(work());

            },time);

        } else{

            reject(console.log("Our shop is close"));
        }

    });

};
 
orders(2000, ()=>console.log(`${stocks.fruits[1]} was selected`))

.then(()=>{

    return orders(0000,()=>console.log("Production has started"));
})

.then(()=>{

    return orders(2000,()=>console.log("The fruits was chooped"));
})

.then(()=>{

    return orders(1000,()=>console.log(`${stocks.liquide[0]} and ${stocks.liquide[1]} was added`));
})

.then(()=>{

    return orders(1000,()=>console.log("The machine is start"))
})

.then(()=>{

    return orders(2000,() => console.log(`${stocks.holder[0]} ice cream place on cone`))
})

.then(()=>{

    return orders(3000,() => console.log(`${stocks.toppings[0]} was added`))
})

.then(()=>{

    return orders(1000,() => console.log("Serve the Ice Cream"))
})

orders()