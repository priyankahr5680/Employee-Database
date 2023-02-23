
    import React, { useState, useRef, useEffect } from 'react'

    import Swal from 'sweetalert2';
    
    function CreatEmployee({ employees, setEmployees, setIsAdding }) {
        const [Image,setImage]=useState('')
        const [Name, setName] = useState('');
        const [Email, setEmail] = useState('');
        const [PhoneNo,setPhoneNO]=useState('');
        const [Designation,setDesgination]=useState('');
        const [gender,setGender]=useState('Male');
        const [Course,setCourse]=useState('');
        const [Creatdate, setDate] = useState('');
    
    
        const textInput = useRef(null);
    
        useEffect(() => {
            textInput.current.focus();
        }, [])
    
        const handleAdd = e => {
            e.preventDefault();
            if (!Name || !Email ||!PhoneNo||!Designation||!Course||!Creatdate) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'All fields are required.',
                    showConfirmButton: true
                });
            }
    
            const id = employees.length + 1;
            const newEmployee = {
                id,
                Image,
                Name,
                Email, 
                PhoneNo,
                Designation,  
                gender, 
                Course,      
                Creatdate
            }
            employees.push(newEmployee);
            setEmployees(employees);
            setIsAdding(false);
    
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${Name}'s data has been Added.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    
    
        return (
     
            <div className="small-container">
                <form onSubmit={handleAdd}>
                    
                    <h1>Add Employee</h1>
                    <label htmlFor="photo">Upload Profile</label>
                  <input type="url" width="30"height="30" value={Image} onChange={(e)=>setImage(e.target.value)}/>
                      {/* <label htmlFor="photo">Upload Profile</label>
                      <input type="image" width="30"height="30"
                      value={Image}onChange={(e)=>setImage(e.target.value)}/> */}
                    <label htmlFor="Name">Name</label>
                    <input
                        id="Name"
                        type="text"
                        ref={textInput}
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
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={Creatdate}
                        onChange={e => setDate(e.target.value)}
                    />
                    <div style={{ marginTop: '30px' }}>
                        <input type="submit" value="Add" />
                        <input
                            style={{ marginLeft: '12px' }}
                            className="muted-button"
                            type="button"
                            value="Cancel"
                            onClick={() => setIsAdding(false)}
                        />
                    </div>
        
                </form>
            </div>
         
        );
    }
    
 
export default CreatEmployee;