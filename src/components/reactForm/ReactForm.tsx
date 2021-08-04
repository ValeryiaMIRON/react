import React, { FC, useEffect, useState } from 'react';
import './ReactForm.scss';
import { Props } from './../../types/types';

const ReactForm: FC<Props> = ({ setFormValues }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [deliveryType, setDeliveryType] = useState<string | boolean>(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [typePayment, setTypePayment] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [checkboxDirty, setCheckboxDirty] = useState(false);
  const [deliveryTypeDirty, setDeliveryTypeDirty] = useState(false);
  const [deliveryDateDirty, setDeliveryDateDirty] = useState(false);
  const [typePaymentDirty, setTypePaymentDirty] = useState(false);

  const [nameError, setNameError] = useState('Fill in the field');
  const [surnameError, setSurnameError] = useState('Fill in the field');
  const [checkboxError, setCheckboxError] = useState('Fill in the field');
  const [deliveryTypeError, setDeliveryTypeError] = useState('Fill in the field');
  const [deliveryDateError, setDeliveryDateError] = useState('Fill in the field');
  const [typePaymentError, setTypePaymentError] = useState('Fill in the field');

  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setFormValues((state) => [
      ...state,
      { name, surname, deliveryDate, deliveryType, checkbox, typePayment },
    ]);
    snackbar();
    reset();
  };

  const snackbar = () => {
    // Get the snackbar DIV
    var toast = document.getElementById('snackbar');

    // Add the "show" class to DIV
    if (toast) {
      toast.className = 'show';
    }

    // After 3 seconds, remove the show class from DIV

    setTimeout(function () {
      if (toast?.className) {
        toast.className = toast?.className.replace('show', '');
      }
    }, 3000);
  };

  const reset = () => {
    setCheckbox(false);
    setDeliveryType(false);
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
      deliveryTypeError ||
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
    deliveryTypeError,
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
    setDeliveryType(e.target.value);
    if (!e.target.value) {
      setDeliveryTypeError('Сhoose type of delivery');
    } else {
      setDeliveryTypeError('');
    }
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value);
    if (new Date(e.target.value).getDate() < new Date().getDate()) {
      setDeliveryDateError('Сhoose correct date');
    } else if (new Date(e.target.value).getMonth() < new Date().getMonth()) {
      setDeliveryDateError('Сhoose correct date');
    } else {
      setDeliveryDateError('');
    }
  };

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
      case 'deliveryDate':
        setDeliveryDateDirty(true);
        break;
    }
  };

  return (
    <div>
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
        {deliveryDateDirty && deliveryDateError && (
          <div style={{ color: 'red' }}>{deliveryDateError}</div>
        )}
        <label htmlFor="deliveryDate">Delivery date</label>
        <input
          className="delivery-date"
          type="date"
          onChange={(e) => dateHandler(e)}
          onBlur={(e) => blurHandler(e)}
          id="deliveryDate"
          name="deliveryDate"
          value={deliveryDate}
          required
        />
        {deliveryTypeDirty && deliveryTypeError && (
          <div style={{ color: 'red' }}>{deliveryTypeError}</div>
        )}
        <div id="radio">
          <label htmlFor="deliveryType">Delivery type:</label>
          contact delivery
          <input
            className="radio"
            type="radio"
            onChange={(e) => deliveryTypeHandler(e)}
            name="deliveryType"
            value="contact delivery"
            checked={deliveryType === 'contact delivery'}
            required
          />
          {''}
          contactless delivery
          <input
            className="radio"
            type="radio"
            onChange={(e) => deliveryTypeHandler(e)}
            name="deliveryType"
            value="contactless delivery"
            checked={deliveryType === 'contactless delivery'}
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
      <div id="snackbar">Данные успешно сохранены</div>
    </div>
  );
};

export default ReactForm;
