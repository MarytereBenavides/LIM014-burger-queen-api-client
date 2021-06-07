import React, { useReducer } from 'react';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function CashierScreen() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div >
        <div>
            <label>CLIENT :</label>
            <input name="name" onChange={handleChange}/>
        </div>
       <div>
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <p key={name}>{value.toString()}</p>
           ))}
         </ul>
       </div>
       
    </div>

  )
}

export default CashierScreen;