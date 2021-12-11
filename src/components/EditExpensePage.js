import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const EditExpensePage = (props) => {
	const params = useParams();
    console.log(params)
	return (
		<div>
			<p>Editing the expenses with the id of {params.id}</p>
		</div>
	);
};

const mapStateTopProps = (state, params) => {
    console.log(params)
    return {
        expense: state.expense.find((expense) => expense.id === params.id)
    }
}

export default connect(mapStateTopProps)(EditExpensePage);