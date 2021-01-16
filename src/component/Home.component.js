import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, FlatList} from "react-native";
import {Layout, Button, TopNavigation, Divider} from '@ui-kitten/components'
import ItemList from "./ItemList.component";
import {getMoviesFromApiWithSearchedText, getPopularMoviesFromApi} from "../api/movieApi";
import popularMoviesData from "../helpers/popularMoviesData";

const Home = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    }

    let searchedText = "";

    const loadPopularMovies = () =>{
        return popularMoviesData;
    }

    const [movies, setMovies] = useState(loadPopularMovies().results);


    const loadMovies = (text) => {
        getMoviesFromApiWithSearchedText(text).then((data) => setMovies(data.results))
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Home' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <TextInput style={styles.textinput} placeholder='Titre du film' onChangeText={(text) => {searchedText = text}}/>
                <Button onPress={() => loadMovies(searchedText)}>Rechercher</Button>
                <ItemList navigation ={navigation} data={movies}/>
            </Layout>
        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        backgroundColor: 'grey',
        color: 'white',
        borderWidth: 1,
        paddingLeft: 5
    },
})
