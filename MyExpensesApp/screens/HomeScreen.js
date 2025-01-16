import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddExpense from '../components/AddExpense';
import ExpenseList from '../components/ExpenseList';

const HomeScreen = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (text) => {
        setExpenses([...expenses, { id: expenses.length + 1, text }]);
    };

    return (
        <View style={styles.container}>
            <AddExpense onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default HomeScreen;
