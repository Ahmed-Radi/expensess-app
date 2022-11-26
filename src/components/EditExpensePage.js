import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { useNavigate  } from "react-router-dom";

const EditExpensePage = (props) => {
	const { id } = useParams();
    const navigate = useNavigate();
    const selectExpense = props.expense.find(expense => expense.id === id);
    console.log(selectExpense)
    console.log(props.expense)
	return (
		<div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('Updated', expense)
                }}
            />
			<p>Editing the expenses with the id of { id }</p>
		</div>
	);
};

const mapStateTopProps = (state) => {
    return {
        expense: state.expenses,
    }
}

export default connect(mapStateTopProps)(EditExpensePage);