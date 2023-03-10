import MainHeading from '../../components/MainHeading';

function Main() {
  return (
    <div className='main-container'>
      <header className='main-header'>
        <MainHeading />
      </header>
      <main>
        <h1 className='main-content'>Расчет Ингредиентов Блюд</h1>
      </main>
    </div>
  );
}

export default Main;
