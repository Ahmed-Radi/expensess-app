import React from 'react'
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import SelectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) => {
                return <ExpensesListItem key={expense.id} {...expense}/>
            })}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)