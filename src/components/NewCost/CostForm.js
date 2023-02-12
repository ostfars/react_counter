import React, {useState} from 'react';
import './CostForm.css'

const CostForm = () => {

  const [name, setName] = useState('');
  const [sum, setSum] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const sumChangeHandler = (event) => {
    setSum(event.target.value)  
  }
  
  const dateChangeHandler = (event) => {
    setDate(event.target.value)  
  }

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" min='0.01' step='0.01' onChange={sumChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min='2019-01-01' onChange={dateChangeHandler}/>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>

      </div>
    </form>
  )
};

export default CostForm;