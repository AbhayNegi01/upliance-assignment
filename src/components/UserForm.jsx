import { useState, useEffect } from 'react';

const UserForm = () => {
  const initialState = { id: Date.now(), name: "", address: "", email: "", phone: "" };
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("userData")) || initialState;
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setHasUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Data has been saved!");
    setHasUnsavedChanges(false);
    setUser(initialState);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className='bg-white/80 p-6 rounded-lg shadow-md w-80 mx-20 my-20'
      key={user.id}
    >
      <h2 className='text-center text-2xl font-bold mb-4'>User Form</h2>

      <label>Name:
        <input 
          name="name" 
          placeholder="Enter your name" 
          onChange={handleChange} 
          className="w-full p-1 border rounded mb-2"
          required
        />  
      </label>

      <label>Address:
        <input 
          name="address" 
          placeholder="Enter your address" 
          onChange={handleChange} 
          className="w-full p-1 border rounded mb-2"
          required 
        />
      </label>
      
      <label>Email:
        <input 
          name="email" 
          placeholder="Enter your email" 
          onChange={handleChange}
          className="w-full p-1 border rounded mb-2"
          required
        />
      </label>

      <label>Phone:
        <input 
          name="phone"
          placeholder="Enter your phone number" 
          onChange={handleChange} 
          className="w-full p-1 border rounded mb-6"
          required
        />
      </label>

      <button type='submit' className='bg-slate-400 py-3 w-full rounded-lg'>Save</button>
    </form>
  );
};

export default UserForm;