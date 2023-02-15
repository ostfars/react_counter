import React, {useState} from 'react';
import './CostForm.css'

const CostForm = (props) => {

  const [name, setName] = useState('');
  const [sum, setSum] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   sum: '',
  //   date: ''
  // });

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     name: event.target.value
  //   })    
  }
  const sumChangeHandler = (event) => {
    setSum(event.target.value)  
    // setUserInput({
    //   ...userInput,
    //   sum: event.target.value
    // })
  }
  
  const dateChangeHandler = (event) => {
    setDate(event.target.value)  

    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })

    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value
    //   }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: name,
      sum: sum,
      date: new Date(date)
    };

    props.onSaveCostData(costData);
    setName('')
    setSum('')
    setDate('')

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={name} onChange={nameChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" min='0.01' step='0.01' value={sum} onChange={sumChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min='2019-01-01' value={date} onChange={dateChangeHandler}/>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>

      </div>
    </form>
  )
};

export default CostForm;