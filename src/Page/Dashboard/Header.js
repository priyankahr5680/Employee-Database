import React from 'react'
import { employeesData } from '../../data';
function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{display:"flex" ,justifyContent:"space-between"}} className='total'>
            <h3 style={{margin:"5px"}} >Employee List</h3>
            <h5 style={{marginRight:"100px",marginTop:"10px"}}>Total:{employeesData.length}</h5>
          <input   style={{width:"200px",hight:"50px",marginTop:"10px"}} type="search"  placeholder='search employee'/>
            </div>
           
            <div style={{ marginTop: '0px', marginBottom: '2px' }}>
                <button onClick={() => setIsAdding(true)} style={{backgroundColor:"lightgreen"}} className='round-button'>Create Employee</button>
            </div>
        </header>
    )
}

export default Header