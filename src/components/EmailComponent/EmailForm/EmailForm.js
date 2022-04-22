import React, { useState } from 'react';
import Button from '../../UI/Button';
import Input from './Input';
import './EmailForm.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);

  const isEmailValid = (email) => {
    return /^([a-zA-Z]|[0-9]|[._])+@[a-z]+[.][a-z]{2,3}$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmission = () => {
    setValid(isEmailValid(email));
  };

  return (
    <div className="email-form">
      <Input
        type="email"
        value={email}
        valid={valid}
        onChange={handleEmailChange}
        placeholder={'email@example.com'}
      />
      <Button
        text={'Get Started For Free'}
        className="btn-form"
        onClick={handleSubmission}
      />
    </div>
  );
};

export default EmailForm;
