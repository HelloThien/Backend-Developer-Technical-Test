import Member from './Member';

const Level3 = (props)=>{
    const members = props.members
     
    return (
        <tr>
          <td></td>
          <Member  member={members[0]}  border="bl bt" position="b-l"/> 
          <Member   member={members[1]}  border="br bt" position="b-r"/> 
          <td className='bt bl'> </td>
          <Member  member={members[2]}  border="br bt" position="b-r"/> 
          <td> </td>
          <td> </td>
          <Member  member={members[3]}  border="br  " position="b-r"/> 
          <td className='  bl'> </td>
        </tr>
    )
}
export default Level3