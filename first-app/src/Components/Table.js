import React, { useState } from 'react';
// import "../node_modules/bootstrap/scss/bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Table = (props) => {

    const [isOpnen, setOpen] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [roleInput, setRoleInput] = useState('')
    const [familyInput, setFamilyInput] = useState('')
    const [userInput, setUserInput] = useState('')
    const [tableData, setTableData] = useState([])
    

    const handleNameChange = (event) => {
        setNameInput(event.target.value)
    }
    const handleRoleChange = (event) => {
        setRoleInput(event.target.value)
    }
    const handleUserChange = (event) => {
        setUserInput(event.target.value)
    }
    const handleFamilyChange = (event) => {
        setFamilyInput(event.target.value)
    }

    const removeItem = (index) =>{
        const newList = tableData.filter((value,i) => i !== index)
        setTableData(newList);
    }

    const handleCreate = (event) => {
        event.preventDefault();

        const newRow = {
            name: nameInput,
            family: familyInput,
            username: userInput,
            role: roleInput,
        }
        
        setTableData([...tableData, newRow]);
        setOpen(false);
        setNameInput('');
        setFamilyInput('');
        setRoleInput('')
        setUserInput('')
    }


    const openCreatePopup = () => {
        setOpen(true);
        
    }

    return (
        <div>
            <div className='container my-2'>
                <div className='d-flex justify-content-end'>
                    <button onClick={openCreatePopup} className='btn btn-info'>ایجاد</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>نام کاربری</th>
                            <th>نقش</th>
                            <th>تاریخ تولد</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.family}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>{item.remove}</td>
                                <td>
                                    <button className='btn btn-warning mx-2'>ویرایش</button>
                                    <button onClick={e => removeItem(index,e)} className='btn btn-danger' >حذف</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


            {isOpnen &&
                <div className='container'>
                    <form className='row'>

                        <div className="col-md-4 mb-3">
                            <input type="text"
                                placeholder='نام'
                                class="form-control"
                                id="name"
                                value={nameInput}
                                onChange={handleNameChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="text"
                                placeholder='نام خانوادگی'
                                class="form-control"
                                id="family"
                                value={familyInput}
                                onChange={handleFamilyChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="text"
                                placeholder='نام کاربری'
                                class="form-control"
                                id="username"
                                value={userInput}
                                onChange={handleUserChange}
                            />
                        </div>
                        <div onChange={handleRoleChange} className='col-md-4'>
                            <select class=" form-select mb-3">
                                <option selected>کاربر</option>
                                <option>مدیر</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <input type="date" placeholder='تاریخ تولد' class="form-control" id="family" />
                        </div>


                        <button onClick={handleCreate} type="submit" class="btn btn-primary">ایجاد</button>
                    </form>
                </div>}
        </div>
    )
}
