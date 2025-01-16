import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddExpense = ({ onAddExpense }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.length > 0) {
            onAddExpense(text);
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ajouter une dépense"
                value={text}
                onChangeText={setText}
            />
            <Button title="Ajouter" onPress={handleAdd} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default AddExpense;
