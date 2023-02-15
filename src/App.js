import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 21),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1254.72
    },
    {
      id: 'c3',
      date: new Date(2021, 3, 1),
      description: 'Джинсы',
      amount: 49.99
    }
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('APP');
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs {...costs}/>  
    </div>
  );
}

export default App;
