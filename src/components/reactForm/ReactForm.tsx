import React, { FC, useEffect, useState } from 'react';
import './ReactForm.scss';
import { Props } from './../../types/types';

const ReactForm: FC<Props> = ({ setFormValues }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [deliveryType1, setDeliveryType1] = useState<string | boolean>(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [typePayment, setTypePayment] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [checkboxDirty, setCheckboxDirty] = useState(false);
  const [deliveryTypeDirty1, setDeliveryTypeDirty1] = useState(false);
  const [deliveryDateDirty, setDeliveryDateDirty] = useState(false);
  const [typePaymentDirty, setTypePaymentDirty] = useState(false);

  const [nameError, setNameError] = useState('Fill in the field');
  const [surnameError, setSurnameError] = useState('Fill in the field');
  const [checkboxError, setCheckboxError] = useState('Fill in the field');
  const [deliveryTypeError1, setDeliveryTypeError1] = useState('Fill in the field');
  const [deliveryDateError, setDeliveryDateError] = useState('Fill in the field');
  const [typePaymentError, setTypePaymentError] = useState('Fill in the field');
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormValues((state) => [
      ...state,
      { name, surname, deliveryDate, deliveryType1, checkbox, typePayment },
    ]);

    reset();
  };

  const reset = () => {
    setCheckbox(false);
    setDeliveryType1(false);
    setTypePayment('');
    setDeliveryDate('');
    setName('');
    setSurname('');
  };

  useEffect(() => {
    if (
      nameError ||
      surnameError ||
      checkboxError ||
      deliveryTypeError1 ||
      deliveryDateError ||
      typePaymentError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    nameError,
    surnameError,
    checkboxError,
    deliveryTypeError1,
    deliveryDateError,
    typePaymentError,
  ]);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Please, use only english letters');
    } else {
      setNameError('');
    }
  };

  const surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setSurnameError('Please, use only english letters');
    } else {
      setSurnameError('');
    }
  };

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(e.target.checked);
    if (!e.target.checked) {
      setCheckboxError('Сonfirm that you agree');
      setCheckboxDirty(true);
    } else {
      setCheckboxError('');
    }
  };

  const deliveryTypeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryType1(e.target.value);
    if (!e.target.value) {
      setDeliveryTypeError1('Сhoose type of delivery');
    } else {
      setDeliveryTypeError1('');
    }
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value);
    console.log(e.target.value);
    console.log(deliveryDate);

    // let dateInput = document.getElementById('deliveryDate') as HTMLInputElement;
    // dateInput.valueAsDate = new Date();
    // document.addEventListener('DOMContentLoaded', function () {
    //   var d = new Date();
    //   var day = d.getDate();
    //   var month = d.getMonth() + 1;
    //   var year = d.getFullYear();
    //   var name_input = document.getElementById('deliveryDate') as HTMLInputElement;
    //   if (name_input) {
    //     name_input.value = day + '-' + month + '-' + year;
    //   }
    //   console.log((name_input.value = day + '-' + month + '-' + year));
    // });

    if (e.target.value < deliveryDate) {
      setDeliveryDateError('Сhoose correct date');
    } else {
      setDeliveryDateError('');
    }
  };

  //   const typePaymentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const typePaymentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypePayment(e.target.value);
    if (e.target.value === '') {
      setTypePaymentError('Сhoose type of payment');
    } else {
      setTypePaymentError('');
    }
  };

  // когда пользователь убрал курсор с инпута, не заполнив его
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'surname':
        setSurnameDirty(true);
        break;
    }
  };

  return (
    <form className={'form'} onSubmit={handleSubmit}>
      {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
      <label>
        Name:
        <input
          onChange={(e) => nameHandler(e)}
          value={name}
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="name"
          required
        ></input>
      </label>{' '}
      {''}
      {surnameDirty && surnameError && <div style={{ color: 'red' }}>{surnameError}</div>}
      <label>Surname:</label>{' '}
      <input
        onChange={(e) => surnameHandler(e)}
        value={surname}
        onBlur={(e) => blurHandler(e)}
        type="text"
        name="surname"
        required
      />
      {deliveryDateError === '' && <div style={{ color: 'red' }}>{deliveryDateError}</div>}
      <label htmlFor="deliveryDate">Delivery date</label>
      <input
        className="delivery-date"
        type="date"
        onChange={(e) => dateHandler(e)}
        id="deliveryDate"
        name="deliveryDate"
        value={deliveryDate}
        max="2022-12-31"
        min="2021-08-04"
        required
      />
      {deliveryTypeDirty1 && deliveryTypeError1 && (
        <div style={{ color: 'red' }}>{deliveryTypeError1}</div>
      )}
      <div id="radio">
        <label htmlFor="payment">Delivery type:</label>
        contact delivery
        <input
          className="radio"
          type="radio"
          onChange={(e) => deliveryTypeHandler(e)}
          name="deliveryType1"
          value="contact delivery"
          checked={deliveryType1 === 'contact delivery'}
          required
        />
        {''}
        contactless delivery
        <input
          className="radio"
          type="radio"
          onChange={(e) => deliveryTypeHandler(e)}
          name="deliveryType1"
          value="contactless delivery"
          checked={deliveryType1 === 'contactless delivery'}
          required
        />
        {''}
      </div>
      {typePaymentDirty && typePaymentError && (
        <div style={{ color: 'red' }}>{typePaymentError}</div>
      )}
      <label htmlFor="typepayment">
        Select the type of payment:
        <select
          required
          name="typepayment"
          value={typePayment}
          onChange={(e) => typePaymentHandler(e)}
        >
          <option value="">select the type of payment</option>
          <option>by cash or card upon receipt</option>
          <option>online payment on the site </option>
          <option>online payment on the site with an additional discount of 1%</option>
          <option>online payment by credit card for orders from 200 rubles.</option>
          <option>credit</option>
        </select>
      </label>
      {checkboxDirty && checkboxError && <div style={{ color: 'red' }}>{checkboxError}</div>}
      <div className="checkbox">
        <span>I agree to the terms of delivery</span>

        <input
          type="checkbox"
          name="checkbox"
          checked={checkbox}
          onChange={(e) => checkboxHandler(e)}
          required
        />
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactForm;
