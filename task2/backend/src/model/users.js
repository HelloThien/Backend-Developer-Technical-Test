const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaUsers = new Schema({
  id: String,
  name: String,
  email: String,
  birth: String,
});

const users = mongoose.model("users", schemaUsers);

class controllUsers {
   
  //  find data 
  getUsers(req, res, next) {
     
    var filter = {} 
    if(req.query) filter = req.query
    
    users.find(filter).then((users) => {
      res.json(users);
    });
  }
  //  insert data
  insertUsers(req, res, next) {
    
    var user = new users(req.body);

    user
      .save()
      .then((x) => {
        res.json("success");
      })
      .catch(next)
  }

  //  update data 
  setUser(req, res, next) {
    const data = req.body; 

    users
      .updateOne({id:req.body.id}, data)
      .then(() => {
        res.json("success");
      })
      .catch(next)
  }

  //  delete data 
  delUser(req, res, next) { 

    users
      .deleteOne(req.body)
      .then(() => {
        res.json("success");
      })
      .catch(next)
  }
}

module.exports = new controllUsers();
