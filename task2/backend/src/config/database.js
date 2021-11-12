const   mongoose   = require("mongoose");


async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mydata")
        console.log("connect succesfully")
    }
    catch(error){
        console.log(error)
    }
}

module.exports= {connect}
