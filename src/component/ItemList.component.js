import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Item from "./Item";



export const ItemList = ({navigation, data}) => {


    return (
        <List
            data={data}
            renderItem={({item, index}) =>(
                <Item item={item} index={index} navigation={navigation}/>
            )}
        />
    );
};

export default ItemList;
