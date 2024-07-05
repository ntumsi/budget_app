import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {  
       const selectedCurency=event.target.value;
      
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurency,
        });
        
    };
    return (
        <div className='alert alert-success'>
            <label htmlFor="currency">Currency: </label>
            <select id="currency" value={currency} onChange={handleCurrencyChange} style={{ marginLeft: '5px' }}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};


export default Currency