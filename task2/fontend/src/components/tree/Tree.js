 import { useState } from 'react';
import './index.css'

import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';

export default function MyTree() {
  const [members,setMembers] =useState(data)
  const level1 = members.filter(e=>e.level===1)
  const level2 = members.filter(e=>e.level===2)
  const level3 = members.filter(e=>e.level===3)
  
  return (

     <div className="container-Tree ">
       <table >
      <tbody>
        
          <Level1 members={level1}/>
         
          <Level2 members={level2}/>
          <Level3 members={level3}/>
        
        
      </tbody>
      </table>
     </div>
  );
}


const data = [
  {   id:1,
      name:"APE SIMPSON",
      img :"/abe.png",
      parents:null,
      partner:"MONA SIMPSON",
      level:1,
      age:92
  },
  {   id:2,
      name:"MONA SIMPSON",
      img :"/MONA.png",
      parents:null,
      partner:"APE SIMPSON",
      level:1,
      age:89
  },
  {   id:3,
      name:"HERB SIMPSON",
      img :"/HERB.jpg",
      parents:"APE SIMPSON",
      partner:null,
      level:2,
      age:65
  },
  {   id:4,
      name:"HORMER SIMPSON",
      img :"/HORMER.jpg",
      parents:"APE SIMPSON",
      partner:"MERGER BOUVIER",
      level:2, 
      age:69
  },
  {   id:5,
    name:"CLANCY BOUVIER",
    img :"/CLANCY.jpg",
    parents:null,
    partner:"JACQUELINE BOUVIER",
    level:1, 
    age:87
  },
  {   id:6,
    name:"JACQUELINE BOUVIER",
    img :"/JACQUELINE.png",
    parents:null,
    partner:"CLANCY BOUVIER",
    level:1, 
    age:85
  },
  {   id:7,
    name:"MERGER BOUVIER",
    img :"/MERGER.png",
    parents:"CLANCY BOUVIER",
    partner:"HORMER SIMPSON",
    level:2, 
    age:65
  },
  {   id:8,
    name:"PARTY BOUVIER",
    img :"/PARTY.jpg",
    parents:"CLANCY BOUVIER",
    partner:null,
    level:2, 
    age:68
  },
  {   id:9,
    name:"SELMA BOUVIER",
    img :"/SELMA.jpg",
    parents:"CLANCY BOUVIER",
    partner:null,
    level:2, 
    age:62
  }, 
  {   id:11,
    name:"BART SIMPSON",
    img :"/BART.png",
    parents:"HOMER SIMPSON",
    partner:null,
    level:3, 
    age:15
  },
  {   id:12,
    name:"LISA SIMPSON",
    img :"/LISA.png",
    parents:"HOMER SIMPSON",
    partner:null,
    level:3, 
    age:21
  },
  {   id:13,
    name:"MAGGIE SIMPSON",
    img :"/MAGGIE.png",
    parents:"HOMER SIMPSON",
    partner:null,
    level:3, 
    age:18
  },
  {   id:10,
    name:"LING BOUVIER",
    img :"/LING.jpg",
    parents:"SELMA BOUVIER",
    partner:null,
    level:3, 
    age:12
  },
]

 






 