import React from 'react';

const Fororg = () => {
  return (
    <div className="for-org container">
      <h3>Организациям</h3>
      <p>
        Мы нацелены на постоянное сотрудничество. Имея собственный автопарк и налаженную годами
        систему логистики, готовы вам предложить:
      </p>
      <div className="objects container">
        <div className="objectOne">
          <img src="img/org_icon_1.svg" />
          <span>
            Наличная и безналичная формы оплаты. <br /> Работаем с НДС и без
          </span>
        </div>
        <div>
          <img src="img/org_icon_2.svg" />
          <span>
            Заключение договора, вся необходимая <br /> документация
          </span>
        </div>
        <div>
          <img src="img/org_icon_3.svg" />
          <span>Возможность отсрочки платежа постоянным клиентам</span>
        </div>
        <div>
          <img src="img/org_icon_4.svg" />
          <span>
            Круглосуточная связь с диспетчером <br /> и водителем, <br /> отслеживание груза
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fororg;
