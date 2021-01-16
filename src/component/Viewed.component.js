import React from 'react';
import {SafeAreaView} from "react-native";
import {Layout, Button, Text, List, TopNavigation, Divider} from '@ui-kitten/components';
import {connect} from 'react-redux'
import ItemList from "./MovieList.component";

const Viewed = ({favorites, navigation}) => {
    console.log(favorites);
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Viewed' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <ItemList navigation ={navigation} data={favorites}/>
            </Layout>
        </SafeAreaView>

    );
};

const mapStateToProps = (state) =>{
    return {
        favorites: state.favorites
    };
}

export default connect(mapStateToProps) (Viewed);

