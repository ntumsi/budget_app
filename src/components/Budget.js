import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import useCurrency from './useCurrency';

const Budget = () => {
    const currency = useCurrency();
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div  className='row'>
            <div className='alert alert-secondary'>
              <span>Budget: {currency}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
            <div className=''>
            </div>
        </div>
    );
};
export default Budget;
