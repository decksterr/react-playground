import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h3>Add Expense</h3>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
