import { useState, useEffect } from "react";
import './Form.css'
import storage from "../DataFile/Data";

const Form = (props) => {
  const [form, setForm] = useState({ userName: '', email: '', role: '', city: '', age: '' });
  const [errorMessages, setErrorMessages] = useState({ userName: '', email: '', role: '', city: '', age: '' });

  useEffect(() => {
    if (props.customerToUpdate) {
      setForm({
        userName: props.customerToUpdate.name,
        email: props.customerToUpdate.email,
        role: props.customerToUpdate.rol,
        city: props.customerToUpdate.city,
        age: props.customerToUpdate.age,
      });
    }
  }, [props.customerToUpdate]);

  const onChange = (event) => {
    const fieldName = event.target.getAttribute('state_field');
    setForm({ ...form, [fieldName]: event.target.value });
    setErrorMessages({ ...errorMessages, [fieldName]: '' });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newErrorMessages = {};
    Object.keys(form).forEach((fieldName) => {
      if (form[fieldName] === '' || form[fieldName] === undefined) {
        newErrorMessages[fieldName] = `${fieldName} alanı zorunludur.`;
      }
    });

    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrorMessages).length === 0) {
      if (props.customerToUpdate) {
        storage.updateItem(form.email, form);
      } else {
        storage.insertItem(form.userName, form.email, form.city, form.age, form.role);
      }
      setForm({ userName: '', email: '', role: '', city: '', age: '' });
      props.setCustomerToUpdate(null);
      props.updateCustomerList();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="FormItems">
        <div>
          <p>{errorMessages.userName}</p>
          <label>Name:
            <input
              className="userName"
              state_field="userName"
              state_field_type="string"
              name="txt_userName"
              type="text"
              onChange={onChange}
              value={form.userName}
              required
            />
          </label>
        </div>

        <div>
          <p>{errorMessages.email}</p>
          <label>Email:
            <input
              className="email"
              state_field="email"
              state_field_type="email"
              name="txt_email"
              type="text"
              onChange={onChange}
              value={form.email}
              required
            />
          </label>
        </div>

        <div>
          <p>{errorMessages.role}</p>
          <label>Role:
            <input
              className="role"
              state_field="role"
              state_field_type="string"
              name="txt_role"
              type="text"
              onChange={onChange}
              value={form.role}
              required
            />
          </label>
        </div>

        <div>
          <p>{errorMessages.city}</p>
          <label>City:
            <input
              className="city"
              state_field='city'
              state_field_type='string'
              name='txt_city'
              type='text'
              onChange={onChange}
              value={form.city}
              required
            />
          </label>
        </div>

        <div>
          <p>{errorMessages.age}</p>
          <label>Age:
            <input
              className="age"
              state_field='age'
              state_field_type='number'
              name='txt_age'
              type='number'
              onChange={onChange}
              value={form.age}
              required
            />
          </label>
        </div>

        <button type="submit">Gönder</button>
      </form>
    </>
  );
}

export default Form;
