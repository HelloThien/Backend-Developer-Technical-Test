 


 const ChartFamily = ()=>{


    return(
        <>
         <div>
        <div className="filter">
          <input id="age" type="number" placeholder="age" />
          <button type="button" onClick="handleFilter()">Filter</button>
        </div>
        <div id="editForm">
          <div>
            <div style={{padding: '10px 0 5px 0'}}>
              <label htmlFor="name">Name</label>
              <input id="name" defaultValue />
            </div>
            <div style={{padding: '5px 0 15px 0'}}>
              <button style={{width: '108px'}} id="cancel">Cancel</button>
              <button style={{width: '108px'}} id="save">Save</button>
            </div>
          </div>
        </div>
        <div id="tree" />
      </div>
        </>
    )
 }

 export default ChartFamily