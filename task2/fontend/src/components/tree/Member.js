


const Member =(prop)=>{
    const init = {
        name:"No name",
        img:'/granmo.png'
    }
    const position=prop.position +" card-member"
    const border = prop.border
    const member = prop.member?prop.member:init
     
    return(
        <td className={border}>
        <div className= {position}>
              
              <img src= {member.img||'/granmo.png'} alt="img" />
              <div className="name-member">{member.name}</div>
            </div>
        </td>
    )
}

export default Member