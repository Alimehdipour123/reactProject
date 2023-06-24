import React from 'react';

const Form = (props) => {
  const {
    nameInput,
    familyInput,
    userInput,
    roleInput,
    handleInputChange,
    handleAction,
    isEditing,
    editData,
  } = props;

  return (
    <div className='container'>
      <form className='row'>
        <div className='col-md-4 mb-3'>
          <input
            type='text'
            placeholder='نام'
            className='form-control'
            value={nameInput}
            onChange={(event) => handleInputChange(event, 'name')}
          />
        </div>

        <div className='col-md-4 mb-3'>
          <input
            type='text'
            placeholder='نام خانوادگی'
            className='form-control'
            value={familyInput}
            onChange={(event) => handleInputChange(event, 'family')}
          />
        </div>

        <div className='col-md-4 mb-3'>
          <input
            type='text'
            placeholder='نام کاربری'
            className='form-control'
            value={userInput}
            onChange={(event) => handleInputChange(event, 'user')}
          />
        </div>

        <div className='col-md-4'>
          <select
            className='form-select mb-3'
            value={roleInput}
            onChange={(event) => handleInputChange(event, 'role')}
          >
            <option value='کاربر'>کاربر</option>
            <option value='مدیر'>مدیر</option>
          </select>
        </div>

        <div className='col-md-4 mb-3'>
          <input
            type='date'
            placeholder='تاریخ تولد'
            className='form-control'
          />
        </div>

        <button
          onClick={handleAction}
          type='submit'
          className='btn btn-primary'
        >
          {isEditing ? 'ویرایش' : 'ایجاد'}
        </button>
      </form>
    </div>
  );
};

export default Form;
