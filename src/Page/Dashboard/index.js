import React, { useState } from 'react'
import './homeNavbar.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
 import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div>
        <div className="logo">
        <img width="60px" height="60px"  src="https://th.bing.com/th/id/OIP.nP_KPuTWO8EoqVEoP3wxNgHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
  
  <div className="homeNavbar">
        <ul>
          <li><Link  to='/dash' style={{color:"black"}}>Home</Link></li>
          <li> <Link to='/dashboard' style={{color:"black"}}>Employee List</Link></li>               
          <li><Link  to='/' style={{color:"black"}}>Logout</Link></li>

        </ul>
  </div>
  </div>
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
        </div>
    )
}

export default Dashboard;