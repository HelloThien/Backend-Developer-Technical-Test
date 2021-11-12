import React, { useState, useEffect } from "react";
import "./tableuser.css";
import axios from "axios";

import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
const TableUser = () => {
  const [users, setuser] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((users) => {
      const newUser = users.data;
      
      setuser(newUser);
    });
  }, []);

  const handleAdd = (user) => {
    user["_id"] = users.length;
    const newUsers = [...users];
    newUsers.push(user);
    setuser(newUsers);  
  };
  const handleReset = (newusers) => {
      
     setuser()
     setuser(pre=>newusers)
     
     
  };
  return (
    <div className="table-user">
       
      <Search handleReset={handleReset} />
      <div className="table-row row-head">
        <div className="table-col">ID</div>
        <div className="table-col">Name</div>
        <div className="table-col">Email</div>
        <div className="table-col">Birthday </div>
        <div className="table-col col-del">Delete </div>
        <div className="table-col col-del">Update</div>
      </div>

      {users ? (
        users.map((user, index) => <TableRow user={user} key={index} users={users}   />)
      ) : (
        <></>
      )}   
      <AddRow handleAdd={handleAdd} users={users} />
    </div>
  );
};

const TableRow = (prop) => {
  const [user, setuser] = useState(prop.user);

  const handleEdit = (e) => {
    const newuser = { ...user };
    newuser[e.target.name] = e.target.value.trim();
    setuser(newuser);
  };

  const handleRemove = () => {
    axios.post("api/deluser", { id: user.id }).then((res) => {
      alert(res.data);
      setuser();
    });
  };

  const handleUpdate = () => {
    if(!checkId(user.id.trim(),prop.users)){
      alert("id is not valid!")
      return
    }
    axios
      .post("api/setuser", { ...user })
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return user ? (
    
    <div className="table-row">
      <div className="table-col">
        <input type="text" name="id" value={user.id} onChange={handleEdit} />
      </div>
      
      <div className="table-col">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleEdit}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleEdit}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="birth"
          value={user.birth}
          onChange={handleEdit}
        />
      </div>
      <div className="table-col col-del">
        <div className="btn-del" onClick={handleRemove}>
          <AiFillDelete />
        </div>
      </div>
      <div className="table-col col-del">
        <div className="btn-upda" onClick={handleUpdate}>
          <GrUpdate />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

const AddRow = (prop) => {
  const empty = { id: "", name: "", email: "", birth: "" };
  const [user, setUser] = useState(empty);
  const handleOnchange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value.trim();
    setUser(newUser);
  };
  const handleClick = (e) => {
    if(!checkId(user.id,prop.users)){
      alert("id is not valid!")
      return
    }
    if (invalid(user)) {
      axios
        .post("api/users", user)
        .then((res) => {
          alert(res.data);
        })
        .catch((erro) => alert(erro));
      prop.handleAdd(user);

      setUser(empty);
    } else alert("field is empty");
  };
  return (
    <div className="table-row">
      <div className="table-col">
        <input
          type="text"
          name="id"
          placeholder="id"
          value={user.id}
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={user.name}
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="email"
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="birth"
          value={user.birth}
          placeholder="birth"
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col col-find  ">
        <div className="btn-del" onClick={handleClick}>
          <IoMdAddCircleOutline />
        </div>
      </div>
    </div>
  );
};

const Search = (prop) => {
  const [user, setUser] = useState();
  const handleReset = prop.handleReset;

  const handleOnchange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value.trim();
    setUser(newUser);
  };
  const handleSearch =  (e) => {
    var query = "";
    for (var key in user) {
      if (user[key].trim() !== "") query += key + "=" + user[key] + "&";
    }
    
     async function fetchdata(){
      await axios
      .get(`api/users?${query}`)
      .then(res => {
         var newdata = res.data
        handleReset(newdata);
      })
      .catch();
     }
     fetchdata()
      
  };

  return (
    <div className="table-row">
      <div className="table-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleOnchange}
        />
      </div>
      <div className="table-col  ">
        <div className="btn-del" onClick={handleSearch}>
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

function invalid(user) {
  for (var key in user) {
    if (user[key].trim() === "") return false;
  }
  return true;
}

const  checkId = (id,users)=> {
   
   for(var user in users)
   {
     
    if(id===user) return false
   
   }
  return true
}



export default TableUser;
