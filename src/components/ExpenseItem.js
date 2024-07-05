import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import useCurrency from './useCurrency';


const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const currency = useCurrency();
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='1.5em' color='green'  onClick={() => increaseAllocation(props.name)} ></FaPlusCircle></td>
            <td><FaMinusCircle size='1.5em' color='red'  onClick={() => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><TiDelete size='1.5em' color='red' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem;
