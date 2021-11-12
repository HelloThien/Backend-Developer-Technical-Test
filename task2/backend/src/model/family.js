const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schemaFamily = new Schema({
    id: Number,
    age: Number,
    tags: Array,
    ppid:Number,
    name: String,
    img:String
  });
  const family = mongoose.model("family", schemaFamily);


  class controllFamily {

    //  find data 
    getFamily(req, res, next) {
         
       
      family.find({}).then((family) => {
        res.json(family);
      });
    }
    getJsonFamily(req, res, next) {
         
       
      family.find({}).then((family) => {
        const newfamiy = family.map(el=>{
           return {name:el.name,age:el.age}
        })
        res.json(newfamiy);
      });
    }
    setFamily(req, res, next) {
        const data = req.body; 
    
        family 
          .updateOne({id:req.body.id}, data)
          .then(() => {
            res.json("success");
          })
          .catch(next)
      }
}
  
  
  module.exports = new controllFamily();
  