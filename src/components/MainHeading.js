import { Link } from 'react-router-dom';

import mainImg from '../pages/6_0_main_page/img/logo.png';

function MainHeading() {
  return (
    <div className='container-xxl main-heading'>
      <Link to='/'>
        <img
          className='main-heading__img'
          src={mainImg}
          alt='Главная страница'
        />
      </Link>
      <Link to='/Borsch' className='main-heading_links'>
        Борщ - расчет ингридиентов
      </Link>
      <Link to='/Pancakes' className='main-heading_links'>
        Блины - расчет ингредиентов
      </Link>
      <Link to='/Pilaf' className='main-heading_links'>
        Плов - расчет ингридиентов
      </Link>
    </div>
  );
}

export default MainHeading;
