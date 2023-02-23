import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;
    const [Image,setImage]=useState(selectedEmployee.Image)
    const [Name, setName] = useState(selectedEmployee.Name); 
    const [Email, setEmail] = useState(selectedEmployee.Email);
    const [PhoneNo,setPhoneNO]=useState(selectedEmployee.PhoneNo);
    const [Designation,setDesgination]=useState(selectedEmployee.Designation);
    const [gender,setGender]=useState(selectedEmployee.gender);
    const [Course,setCourse]=useState(selectedEmployee.Course);  
    const [Creatdate, setDate] = useState(selectedEmployee.Creatdate);

    const handleUpdate = e => {
        e.preventDefault();

        if (!Name || !Email ||!PhoneNo||!Designation||!Course|| !Creatdate) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            Name,
            Email,
            PhoneNo,
            Designation,
            gender,
            Course,       
            Creatdate
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="photo">Upload Profile</label>
              <input type="url" width="30"height="30" value={Image} onChange={(e)=>setImage(e.target.value)}/>
                  {/* <input type="image" width="30"height="30"
                  value={Image}onChange={(e)=>setImage(e.target.value)}/> */}
                <label htmlFor="Name">Name</label>
              
                <input
                    id="Name"
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                 <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="PhoneNo"> Mobile No:</label>
                <input type="tel"
                 name="PhoneNo" 
                 minlength="10" 
                 maxlength="10"
                 value={PhoneNo}
                 onChange={e=>setPhoneNO(e.target.value)}/>
                 <label htmlFor="Desination">Desination:</label>
                 <input type="text" 
                 name=" Designation"
                 value={Designation}
                 onChange={(e)=>setDesgination(e.target.value)} />
                 <label htmlFor="Course">Course:</label>
                 <input type="text"
                 name="Course" 
                 value={Course}
                 onChange={(e)=>setCourse(e.target.value)}/>
                 
                 <div onChange={(e)=>setGender(e.target.value)}>
                    <label htmlFor="gender">Gender:</label>
                    <input type="radio"value="Male"name="gender"checked={gender==="Male"} />Male
                    <input type="radio" value="Female"name="gender"checked={gender==="Female"} />Female
                 </div>
                                               
                <label htmlFor="date">Date</label>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={Creatdate}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" style={{backgroundColor:"lightgreen"}}/>
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit
