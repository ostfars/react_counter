import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 21),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: 1254.72
    },
    {
      date: new Date(2021, 3, 1),
      description: 'Джинсы',
      amount: 49.99
    }
  ];

  return (
    <div>
      <NewCost />
      <Costs {...costs}/>  
    </div>
  );
}

export default App;
