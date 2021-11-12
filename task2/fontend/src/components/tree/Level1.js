import Member from './Member';

const Level1 = (props)=>{
    const members = props.members
   
    return (
        <tr>
        <Member  border="br bt " position="t-l " member={members[0]}/> 
          <Member  border="bt bl " position="t-r" member={members[1]}/> 
          <td> </td>
          <td> </td>
          <td> </td>
          <Member  border="br bt " position="t-l" member={members[2]}/> 
          <Member  border="bt bl " position="t-r" member={members[3]}/> 
        </tr>
    )
}
export default Level1