import { useState } from 'react';

import Heading from '../../components/Heading';
import Description from '../../components/Description';
import InputGroup from '../../components/InputGroup';
import ButtonCalculate from '../../components/ButtonCalculate';
import TableOutputGroup from '../../components/TableOutputGroup';

import MainHeading from '../../components/MainHeading';

import { productDataPancakes } from '../../dishesAndIngredients/dataWithIngredients';

function Pancakes() {
  const [value, setValue] = useState(0);

  // начальное состояние продуктов
  const [productData, setProductData] = useState(productDataPancakes);

  //___функция указывает на значение введенное в input
  function handleChangeInput(event) {
    // event.target - ссылка на DOM элемент input
    // event.target.value - текущий текст input
    setValue(event.target.value);
  }

  //___функция рассчитывает требуемое количество продуктов для числа порций
  function calculateNumberOfProductData() {
    return setProductData(
      productData.map(function (item) {
        if (value === '' || value[0] === '-' || value.length > 3) {
          setValue(0);
          return {
            ...item,
            quantity: 0,
          };
        } else if (item.weightOfOneServing === 'по вкусу') {
          return {
            ...item,
            quantity: 'по вкусу',
          };
        } else {
          return {
            ...item,
            quantity: (item.weightOfOneServing * Number(value)).toFixed(2),
          };
        }
      })
    );
  }

  return (
    <div className='pancakes-container'>
      <header>
        <MainHeading />
      </header>
      <main>
        {/* <!-----SectionOne---------------------------------------------------------------------------> */}
        <section className='section-one'>
          <Heading name={'Блины - расчет ингридиентов '} />
          <Description
            storyAboutDish={`Блины являются традиционным блюдом русского народа, одним из самых любимых и
          почитаемых блюд, как во времена древней Руси, так и сейчас. Они занимали
          достойное место в доме и считаются одним из самых первых мучных блюд
          появившихся в рационе наших предков приблизительно в 9 веке нашей эры.`}
          />
          {/* <!--Адаптивная таблица (.table-responsive) для горизонтальной прокрутки таблиц--> */}
          <div className='container-xxl table-responsive'>
            <InputGroup value={value} handleChangeInput={handleChangeInput} />
            <div className='btnBlock-section-one'>
              <ButtonCalculate
                onClickCalculateNumberOfIngredients={
                  calculateNumberOfProductData
                }
                buttonName={'Рассчитать'}
              />
            </div>
            <TableOutputGroup productData={productData} value={value} />
          </div>
        </section>
      </main>
    </div>
  );
}
export default Pancakes;
