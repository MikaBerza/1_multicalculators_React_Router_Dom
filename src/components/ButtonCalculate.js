//
//
//
function ButtonCalculate({ onClickCalculateNumberOfIngredients, buttonName }) {
  return (
    <button
      className='btn btn-success btn__item'
      type='button'
      onClick={onClickCalculateNumberOfIngredients}
    >
      {buttonName}
    </button>
  );
}

export default ButtonCalculate;
