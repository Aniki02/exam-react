import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet} from "react-native";
import {Layout, TopNavigationAction, TopNavigation, Divider, Text, Button, List, ListItem} from '@ui-kitten/components'
import {BackIcon, ViewedIcon, ViewedIconEmpty} from "../assets/Icons";
import {connect} from "react-redux";
import {
    getImageFromApi,
    getMoviesCreditFromApiWithSearchedText,
} from "../api/movieApi";

const Details = ({navigation, route, favorites, dispatch}) => {

    const {item} = route.params;
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    const addFav = (idItem) => {
        const action = {type:'ADD', value: idItem}
        dispatch(action)
    }

    const delFav = (idItem) => {
        const action = {type:'DEL', value: idItem}
        dispatch(action)
    }

    const [credits, setCredits] = useState([]);
    console.log(credits);
    const loadMovieCredits = (idMovie) => {
        getMoviesCreditFromApiWithSearchedText(idMovie).then((data) => setCredits(data.results))
    }
    loadMovieCredits(item.id);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Details' alignment='center' accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={styles.main_container}>
                <Image style={styles.image} source={{uri: getImageFromApi(item.poster_path)}}/>
                <Text category={'h1'}>{item.title}</Text>
                <Text category={'h6'}>Date de sortie : {item.release_date}</Text>
                <Text category={'s1'}>{item.overview}</Text>

                <List
                    data={credits}
                    renderItem={({credit}) =>(
                        <ListItem
                            title={credit.name}
                        />
                    )}
                />

                {
                    favorites.findIndex(element => element.id === item.id) !== -1 ?
                        (
                            <Button appearance={"ghost"} status={"primary"} accessoryLeft={ViewedIcon} onPress={()=> delFav(item)}/>
                        ):
                        (
                            <Button appearance={"ghost"} status={"primary"} accessoryLeft={ViewedIconEmpty} onPress={()=> addFav(item)}/>
                        )
                }
            </Layout>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) =>{
    return {
        favorites: state.favorites
    };
}

export default connect(mapStateToProps) (Details);

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        backgroundColor: "#841584",
        width: 300,
        height: 400,
        borderRadius: 12,
    },
});
