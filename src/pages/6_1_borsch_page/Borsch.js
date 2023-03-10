import { useState } from 'react';

import Heading from '../../components/Heading';
import Description from '../../components/Description';
import InputGroup from '../../components/InputGroup';
import ButtonCalculate from '../../components/ButtonCalculate';
import TableOutputGroup from '../../components/TableOutputGroup';

import MainHeading from '../../components/MainHeading';

import { productDataBorsch } from '../../dishesAndIngredients/dataWithIngredients';

function Borsch() {
  const [value, setValue] = useState(0);

  // начальное состояние продуктов
  const [productData, setProductData] = useState(productDataBorsch);

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
    <div className='borsch-container'>
      <header>
        <MainHeading />
      </header>
      <main>
        {/* <!-----SectionOne---------------------------------------------------------------------------> */}
        <section className='section-one'>
          <Heading name={'Борщ - расчет ингридиентов'} />
          <Description
            storyAboutDish={`В старину борщом называли похлёбку из борщевика. Позже борщ готовили на свекольном квасе: его
          разбавляли водой, смесь заливали в глиняный горшок или чугунок и доводили до кипения. В кипяток
          клали нарезанную свёклу, капусту, морковь и другие овощи и ставили горшок в печь. Сваренный
          борщ солили и заправляли.`}
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
export default Borsch;
