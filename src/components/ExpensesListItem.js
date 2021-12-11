import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from "react-router-dom";

const ExpensesListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{ description }</h3>
            </Link>
            <p>{ amount } - { createdAt }</p>
            <button onClick={() => {
                dispatch(removeExpense({id}))
            }}>Remove</button>
        </div>
    )
}

const removeExpenses = state => {
    return {
        expense: state.expenses
    }
}

export default connect()(ExpensesListItem);