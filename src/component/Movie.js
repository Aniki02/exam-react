import React from 'react'
import {Button, Icon, Layout, ListItem} from "@ui-kitten/components";
import {ViewedIcon, ViewedIconEmpty} from "../assets/Icons";
import {Image, StyleSheet} from "react-native";
import {getImageFromApi} from "../api/movieApi";



const Movie = ({ item, index, navigation, isFavorite }) => {
    const renderItemAccessory = (item) => (
        isFavorite ?
            <Button appearance="ghost" status={'primary'} accessoryLeft={ViewedIcon} size='tiny' onPress={() => goToDetails(item)}/>
        :
            <Button appearance="ghost" status={'basic'} accessoryLeft={ViewedIconEmpty} size='tiny' onPress={() => goToDetails(item)}/>

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

export default Movie;

const styles = StyleSheet.create({
    thumbnail: {
        width: 128,
        height: 240,
        borderRadius: 12,
    },
});
