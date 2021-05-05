import React from 'react';
import { useSelector } from 'react-redux';
import Todoitem from './Todoitem';

function Todolist() {
  const todotasks = useSelector((state) => state);
  const items = todotasks.taskItems.map((task) => {
    return (
      <div className='container'>
        <Todoitem task={task} />
      </div>
    );
  });
  return (
    // <div className='row justify-content-center mt-5'>
    //   <div className='col-mg-6'>{items}</div>
    // </div>

    <div className='row justify-content-center p-2 mt-5'>
      <div className='col-md-6' style={{ backgroundColor: 'white' }}>
        {items}
      </div>
    </div>
  );
}

export default Todolist;
