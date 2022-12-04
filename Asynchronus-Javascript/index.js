let stocks = {

    fruits:["Apple", "Banana", "Mango", "Orange"],
    liquide: ["water", "milk"],
    holder: ["cup", "stick", "cone"],
    toppings: ["chocolate", "peanuts"]

};


let order = (call_production)=>{
    
    setTimeout(()=>{

        console.log(`${stocks.fruits[0]} was selected`);

        call_production()

    },1000)
    
     
   
};

let production = ()=>{
    
    setTimeout(()=>{

        console.log("Production has started");

        setTimeout(()=>{

            console.log("The fruits has been choped");

            setTimeout(()=>{
             console.log(`${stocks.liquide[0]} and ${stocks.liquide[1]} was added`);

             setTimeout(()=>{
                console.log("The machine was started");

                setTimeout(()=>{
                    console.log(`icecream was placed on ${stocks.holder[2]}`);

                    setTimeout(()=>{
                     console.log(`${stocks.toppings[0]} was added as topping`);

                     setTimeout(()=>{

                        console.log("Serve Ice cream");
                     },2000)
                    },3000)

                },2000)

             },1000)

            },1000)

        },2000)

    },0000)
  
};

order(production);