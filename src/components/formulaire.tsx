import React, { useState } from 'react';

function MyInput({type,name,placeholder,label}) {
  const [value, setValue] = useState('');

  return (
   <>
   <div>
   <label htmlFor={name}>{label}</label>
   <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
   </div>
   </>
  );
}

export default MyInput;