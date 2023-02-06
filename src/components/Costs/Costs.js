import './Costs.css';
import CostItem from './CostItem';
import Card from '../UI/Card';

function Costs(props) {
  
  return (
    <Card className='costs'>
      <CostItem 
        date={props[0].date} 
        description={props[0].description} 
        amount={props[0].amount}/>
      <CostItem 
        date={props[1].date} 
        description={props[1].description} 
        amount={props[1].amount}/>
      <CostItem 
        date={props[2].date} 
        description={props[2].description} 
        amount={props[2].amount}/>
    </Card>
  )
}

export default Costs;