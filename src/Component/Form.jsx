import { useState, useRef, useEffect } from "react";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: "",
    image: null
  });

  const refImage = useRef(null);

  useEffect(() => {}, []);

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    setFormState({
      ...formState,
      image: file
    });
  };

  const handleFormUpdate = (e) => {
    let { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: val
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form>
        <div>
          <label>Name :</label>
          <input
            onChange={handleFormUpdate}
            value={formState.name}
            placeholder="Name"
            type="text"
            name="name"
          />
        </div>
        
        <div>
          <label>Gender :</label>
          <select
            name="gender"
            value={formState.gender}
            onChange={handleFormUpdate}
          >
            <option value="M" key="male">
              M
            </option>
            <option value="F" key="female">
              F
            </option>
          </select>
        </div>
        
        <div>
          <label>Role :</label>
          <select
            name="role"
            value={formState.role}
            onChange={handleFormUpdate}
          >
            <option value="manager" key="manager">
              Manager
            </option>
            <option value="hr" key="hr">
              HR
            </option>
            <option value="finance" key="finance">
              Finance
            </option>
            <option value="developer" key="developer">
              Developer
            </option>
          </select>
        </div>
        
        <div>
          <label>Marital Status :</label>
          <input
            value={formState.maritalStatus}
            onChange={handleFormUpdate}
            type="checkbox"
            name="maritalStatus"
          />
        </div>
        
        <div>
          <label>Profile Picture :</label>
          <input type="file" ref={refImage} onChange={handleUpdateImage} />
        </div>
        
        <button onClick={handleSubmit} ref={refImage}>
          Submit
        </button>
    </form>
  );
}
