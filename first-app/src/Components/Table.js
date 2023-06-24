import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './Form';

const Table = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    family: '',
    username: '',
    role: '',
  });
  const [nameInput, setNameInput] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [familyInput, setFamilyInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    switch (field) {
      case 'name':
        setNameInput(value);
        break;
      case 'family':
        setFamilyInput(value);
        break;
      case 'user':
        setUserInput(value);
        break;
      case 'role':
        setRoleInput(value);
        break;
      default:
        break;
    }
  };

  const removeItem = (index) => {
    const newList = tableData.filter((value, i) => i !== index);
    setTableData(newList);
  };

  const handleCreate = (event) => {
    event.preventDefault();

    const newRow = {
      name: nameInput,
      family: familyInput,
      username: userInput,
      role: roleInput,
    };

    setTableData([...tableData, newRow]);
    setOpen(false);
    setNameInput('');
    setFamilyInput('');
    setRoleInput('');
    setUserInput('');
  };

  const openCreatePopup = () => {
    setOpen(true);
  };

  const openEditPopup = (index) => {
    setEditIndex(index);
    setEditData(tableData[index]);
    setEditing(true);
    setOpen(true);
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const updatedRow = {
      name: nameInput,
      family: familyInput,
      username: userInput,
      role: roleInput,
    };

    const updatedTableData = [...tableData];
    updatedTableData[editIndex] = updatedRow;

    setTableData(updatedTableData);
    setEditing(false);
    setOpen(false);
    setNameInput('');
    setFamilyInput('');
    setRoleInput('');
    setUserInput('');
  };

  return (
    <div>
      <div className='container my-2'>
        <div className='d-flex justify-content-end'>
          <button onClick={openCreatePopup} className='btn btn-info'>
            ایجاد
          </button>
        </div>
        <table className='table'>
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
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.family}</td>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <td>{item.remove}</td>
                <td>
                  <button className='btn btn-warning mx-2' onClick={() => openEditPopup(index)}>
                    ویرایش
                  </button>
                  <button onClick={() => removeItem(index)} className='btn btn-danger'>
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <Form
          nameInput={nameInput}
          familyInput={familyInput}
          userInput={userInput}
          roleInput={roleInput}
          handleInputChange={handleInputChange}
          handleAction={isEditing ? handleEdit : handleCreate}
          isEditing={isEditing}
          editData={editData}
        />
      )}
    </div>
  );
};

export default Table;
