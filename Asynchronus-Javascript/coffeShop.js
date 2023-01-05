const plcaeOrder = (drink)=>{

    return new Promise(function(resolve, reject){

        if(drink === 'coffe'){
            
            resolve("Your Order for coffee have recieved")
        }

        else{

            reject("order has rejected")
        }
    })

}

 const proccessOrder = (order)=>{
    
    return new Promise(function(resolve){

        console.log("Your order is under proccess....");
        
        
        setTimeout(()=>{

            resolve(`${order} and served`)
        }, 5000)

    })
 }

 plcaeOrder('coffe').then(function(orderPlace){
    console.log(orderPlace);
    let orderIsProcessed = proccessOrder(orderPlace)

    return orderIsProcessed;
 }).then(function(proccessOrder){
    console.log(proccessOrder);
 }).catch(function(err){
    console.log(err);
 })