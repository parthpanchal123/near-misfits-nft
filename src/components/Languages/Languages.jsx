/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { appStore } from '../../state/app';

const Languages = () => {
  const { update } = useContext(appStore);
  const [value, setValue] = useState('en');

  const handleChange = (e) => {
    setValue(e.target.value);
    update('app.locale', e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="en-US">English</option>
      <option value="ru-RU">Русский</option>
    </select>
  );
};

export default Languages;
