import React from 'react';
import './Input.css';

const Input = ({ type, placeholder, onChange, value, valid }) => {
  return (
    <div className="form-control">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!valid && (
        <em className="error-message">
          {'please enter a valid email address'}
        </em>
      )}
    </div>
  );
};

export default Input;
