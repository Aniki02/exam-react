import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Movie from "./Movie";



export const ItemList = ({navigation, data}) => {


    return (
        <List
            data={data}
            renderItem={({item, index}) =>(
                <Movie item={item} index={index} navigation={navigation}/>
            )}
        />
    );
};

export default ItemList;
