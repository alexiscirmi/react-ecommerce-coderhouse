import { useState } from 'react';
import './_item-count.scss';

function ItemCount() {

  const [amount, setAmount] = useState(0);

  const subtractAmount = () => {
    amount > 0 && setAmount(amount - 1);
  }

  const addAmount = () => {
    setAmount(amount + 1);
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={subtractAmount}>-</button>
      <span className='amount-counter'>{amount}</span>
      <button className='btn btn-primary' onClick={addAmount}>+</button>
    </div>
  );
}

export default ItemCount;