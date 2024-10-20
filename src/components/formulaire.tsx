import { useState } from "react";

function MyInput({ inputLabel, onSubmit }: any) {
  const [formData, setFormData] = useState(
    inputLabel.reduce((acc:any, input:any)=>{
        acc[input.name] = "";
        return acc;
    },{})
  );

  const handleChangeValue = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubit = (e: any) => {
    e.preventDefault();
    onSubmit(formData)
  };

  return (
    <>
      <form action="" onSubmit={handleSubit}>
        {inputLabel.map((input: any, index: any) => (
          <div key={index}>
            <label htmlFor={input.label}>{input.label}</label>
            <input
              type={input.type}
              value={input.value}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              onChange={handleChangeValue}
            />
          </div>
        ))}
        <button type="submite">Envoyer</button>
      </form>
    </>
  );
}

export default MyInput;
