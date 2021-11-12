import Member from './Member';

const Level2 = (props)=>{
  const members = props.members
    return (
        <>
           <tr>
        <Member member={members[0]}  border="bl bt" position="b-l"/> 
        <Member member={members[1]}  border="br bt" position="b-r"/> 
          <td className='bb'></td>
          <Member member={members[2]} border="bb " position="b-r"/>  
          <td className='bt bl'> </td>
          <Member member={members[3]}  border="br bt" position="b-r"/> 
          <td className='bt bl'> </td>
          <Member  member={members[4]} border="br bt" position="b-r"/> 
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className='br'></td>
          <td className='bl'> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td className='br'></td>
          <td className='bl'> </td>
          <td> </td>
        </tr>
        </>
    )
}
export default Level2