import React from 'react'
import {Button, Icon, Layout, ListItem} from "@ui-kitten/components";
import {FavIcon, FavIconEmpty} from "../assets/Icons";
import {Image, StyleSheet} from "react-native";
import {getImageFromApi} from "../api/movieApi";



const Item = ({ item, index, navigation, isFavorite }) => {
    const renderItemAccessory = (item) => (
        isFavorite ?
            <Button appearance="ghost" status={'primary'} accessoryLeft={FavIcon} size='tiny' onPress={() => goToDetails(item)}/>
        :
            <Button appearance="ghost" status={'basic'} accessoryLeft={FavIconEmpty} size='tiny' onPress={() => goToDetails(item)}/>

    );

    const renderItemIcon = (item) => (
        <Image style={styles.thumbnail} source={{uri: getImageFromApi(item.poster_path)}}/>
    );

    const goToDetails = (idItem) => {
        navigation.navigate('Details', {item: idItem})
    }

    return (
        <ListItem
            title={item.title}
            description={item.overview}
            accessoryLeft={() => renderItemIcon(item)}
            accessoryRight={() => renderItemAccessory(item) }
            onPress={() => goToDetails(item)
            }
        />
    );
}

export default Item;

const styles = StyleSheet.create({
    thumbnail: {
        width: 128,
        height: 240,
        borderRadius: 12,
    },
});
