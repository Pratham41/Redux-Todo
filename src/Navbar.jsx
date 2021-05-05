import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const taskCount = useSelector((state) => state);
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginTop: '50px',
        height: '50px',
        borderRadius: '10px',
      }}
      className='container'
    >
      <h1>
        React Todo List, Total remaining tasks : {taskCount.taskItems.length}
      </h1>
    </div>
  );
}

export default Navbar;
