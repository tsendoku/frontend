import React from 'react';
import axios from 'axios';

const SendForm = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [city1, setCity1] = React.useState('');
  const [city2, setCity2] = React.useState('');
  const [street1, setStreet1] = React.useState('');
  const [street2, setStreet2] = React.useState('');
  const [size, setSize] = React.useState('');
  const [weight, setWeight] = React.useState('');

  function afterSending() {
    setTimeout(() => {
      window.alert('Данные отправлены, спасибо!');
    }, 450);
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      city1,
      city2,
      street1,
      street2,
      size,
      weight,
    };
    const response = await axios.post('https://45.141.76.175:5000/sendmail', data); // https://45.141.76.175:5000/sendmail or http://localhost:5000/sendmail
    console.log(response.data);
    setTimeout(() => {
      setName('');
      setPhone('');
      setCity1('');
      setCity2('');
      setStreet1('');
      setStreet2('');
      setSize('');
      setWeight('');
    }, 400);
    afterSending();
  };
  // const inputs = document.querySelectorAll('input');
  // let isValid = true;
  // inputs.forEach((input) => {
  //   if (!input.checkValidity()) {
  //     isValid = false;
  //   }
  //   const elem = document.getElementById('sendButton');
  //   if (isValid) {
  //     elem.classList.add('allInputsareValid');
  //   } else {
  //     elem.classList.add('allInputsareValid');
  //   }
  // });
  return (
    <div className="wrapper" id="sendform">
      <div className="sendform container">
        <div className="sendform-uppertext container">
          <span>Хотите заказать машину?</span>
          <p>Работаем круглосуточно</p>
        </div>
        <form onSubmit={sendEmail}>
          <div className="sendform-upperInputs container">
            <input
              type="text"
              className="nameInput"
              id="name"
              maxLength="30"
              placeholder="Ваше имя"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}></input>
            <input
              type="number"
              className="phoneInput"
              id="phone"
              placeholder="+7___ ___-__-__"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}></input>
            <button type="submit" className="backcall">
              Заказать обратный звонок
            </button>
          </div>
          <div className="sendform-location">
            <p className="from container">Откуда</p>
            <p className="to container">Куда</p>
          </div>
          <div className="sendform-middleInputs container">
            <input
              maxLength="25"
              className="cityInput"
              type="text"
              id="city1"
              placeholder="Город"
              value={city1}
              onChange={(e) => setCity1(e.target.value)}></input>
            <input
              maxLength="25"
              className="streetInput"
              type="text"
              id="street1"
              placeholder="Улица"
              value={street1}
              onChange={(e) => setStreet1(e.target.value)}></input>
            <img src="img\form_replacement_icon_click.svg" alt="icon" />
            <input
              maxLength="25"
              className="cityInput"
              type="text"
              id="city2"
              placeholder="Город"
              value={city2}
              onChange={(e) => setCity2(e.target.value)}></input>
            <input
              maxLength="25"
              className="streetInput"
              type="text"
              id="street2"
              placeholder="Улица"
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}></input>
          </div>
          <div className="sendform-bottomInputs container">
            <p className="sizes container">Габариты</p>
            <input
              maxLength="25"
              className="sizesInput"
              type="text"
              id="size"
              placeholder="Длина × ширина × высота"
              value={size}
              onChange={(e) => setSize(e.target.value)}></input>
            <input
              maxLength="25"
              className="weightInput"
              type="text"
              id="weight"
              placeholder="~Вес"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}></input>
            <button type="submit" className="sendButton" id="sendButton">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendForm;
