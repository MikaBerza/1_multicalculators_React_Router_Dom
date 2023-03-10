import { useState } from 'react';

import Heading from '../../components/Heading';
import Description from '../../components/Description';
import InputGroup from '../../components/InputGroup';
import ButtonCalculate from '../../components/ButtonCalculate';
import TableOutputGroup from '../../components/TableOutputGroup';

import MainHeading from '../../components/MainHeading';

import { productDataPilaf } from '../../dishesAndIngredients/dataWithIngredients';

function Pilaf() {
  const [value, setValue] = useState(0);

  // начальное состояние продуктов
  const [productData, setProductData] = useState(productDataPilaf);

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
    <div className='pilaf-container'>
      <header>
        <MainHeading />
      </header>
      <main>
        {/* <!-----SectionOne---------------------------------------------------------------------------> */}
        <section className='section-one'>
          <Heading name={'Плов - расчет ингридиентов '} />
          <Description
            storyAboutDish={`Блюдо восточной кухни, в Персии его называли пилав – очень древнее блюдо, которое
          родилось на Ближнем Востоке с появлением там зерновой рисовой культуры,
          около II-III веков до н.э, основу которого составляет варёный рис
          (в исключительных случаях — другая крупа, мелкие макаронные изделия)
          с добавлением животного или растительного жира.`}
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
export default Pilaf;
