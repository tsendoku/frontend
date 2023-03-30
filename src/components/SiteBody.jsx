import React from 'react';
import axios from 'axios';
import { HashLink as Link } from 'react-router-hash-link';

import CarBlock from '../components/CarBlock';
import SendForm from '../components/SendForm';
import Fororg from './Fororg';

const SiteBody = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCars = async () => {
    try {
      const res = await axios.get('https://641b5f951f5d999a44621efb.mockapi.io/items');
      setItems(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error, 'ERROR');
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    if (items) {
      fetchCars();
    }
  }, []);

  const cars = items.map((car) => (
    <CarBlock
      id={car.id}
      key={car.id}
      title={car.title}
      loadCapacity={car.loadCapacity}
      length={car.length}
      width={car.width}
      height={car.height}
      sizes={car.sizes}
    />
  ));
  return (
    <main>
      <div className="intro">
        <div className="container">
          <p>
            Грузоперевозки <br />
            по всей России <span>круглосуточно</span>
          </p>
        </div>
      </div>
      <div className="blocks container" id="uslugi">
        <div className="block">
          <img src="img\utp_icon_1.svg" />
          <p>
            Качественная <br /> и надёжная перевозка
          </p>
        </div>
        <div className="block">
          <img src="img\utp_icon_2.svg" />
          <p>
            Быстрая подача <br /> машины
          </p>
        </div>
        <div className="block">
          <img src="img\utp_icon_3.svg" />
          <p>
            Всегда <br /> низкие цены
          </p>
        </div>
      </div>
      <div className="services container">
        <div className="services-block">
          <img src="img\section_1.png" />
          <Link to="#sendform">
            <p>
              Квартирный <br /> и офисный переезд
            </p>
          </Link>
        </div>
        <div className="services-block">
          <img src="img\section_2.png" />
          <Link to="#sendform">
            <p>
              Грузовое такси, <br /> перевозка грузов
            </p>
          </Link>
        </div>
        <div className="services-block">
          <img src="img\section_3.png" />
          <Link to="#sendform">
            <p>
              Грузоперевозки <br /> по межгороду
            </p>
          </Link>
        </div>
        <div className="services-block">
          <img src="img\section_4.png" />
          <Link to="#sendform">
            <p>
              Организациям <br /> и корпоративным клиентам
            </p>
          </Link>
        </div>
      </div>
      <div className="autopark container" id="autopark">
        <h5>Наш автопарк</h5>
        <div className="autopark-carblocks">{isLoading === true ? 'exdi' : cars}</div>
      </div>
      <Fororg />
      <SendForm />
      <br />
    </main>
  );
};

export default SiteBody;
