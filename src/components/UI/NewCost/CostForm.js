const CostForm = () => {
  <form>
    <div className="new-cost__controls">
      <div className="new-cost__control">
        <label>Название</label>
        <input type="text" />
      </div>
      <div className="new-cost__control">
        <label>Сумма</label>
        <input type="number" min='0.01' step='0.01' />
      </div>
      <div className="new-cost__control">
        <label>Дата</label>
        <input type="date" min='2019-01-01'/>
      </div>
      

    </div>
  </form>
};

export default CostForm;