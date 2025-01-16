import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ExpenseList = ({ expenses }) => {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.text}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
});

export default ExpenseList;
