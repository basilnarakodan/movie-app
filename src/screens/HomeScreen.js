import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts'
import GenreCard from '../components/GenreCard';
import MovieCard from '../components/MovieCard';
import ItemSeparator from '../components/ItemSeperator';
import {getNowPlayingMovies} from '../services/MovieService'

const Genres=["All","Action","Comedy","Romance","Horror","Sci-Fi"]

const HomeScreen=()=> {
    const [activeGenre,setActiveGenre]=useState("All");
    const [nowPlayingMovies,setNowPlayingMovies]=useState({});

    useEffect(()=>{
        getNowPlayingMovies().then(moviesResponse=>setNowPlayingMovies(moviesResponse.data));
    },[])

  return (
    <ScrollView style={styles.container}>
     <StatusBar style="auto" translucent={false} backgroundColor={Colors.BASIC_BACKGROUND}/>
     
     <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
     </View>
     
     <View style={styles.genreListContainer}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Genres} 
        keyExtractor={(item)=>item}
        renderItem={({item})=>(
            <GenreCard 
                genreName={item} 
                active={item==activeGenre?true:false}
                onPress={(genreName)=>setActiveGenre(genreName)}
            />)}
        ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
        ListHeaderComponent={()=><ItemSeparator width={20}/>}
        ListFooterComponent={()=><ItemSeparator width={20}/>}
        />
     </View>
    
    <View>
        <FlatList
            data={nowPlayingMovies.results}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
            ListHeaderComponent={()=><ItemSeparator width={20}/>}
            ListFooterComponent={()=><ItemSeparator width={20}/>}
            renderItem={({item})=> 
                <MovieCard 
                    title={item.title}
                    language={item.original_language}
                    voteAverage={item.vote_average}
                    voteCount={item.vote_count}
                    poster={item.poster_path}
                />}
        />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.BASIC_BACKGROUND,
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:25,
  },
  headerTitle:{
    fontSize:28,
    fontFamily:Fonts.REGULAR,
  },
  headerSubTitle:{
    fontSize:13,
    color:Colors.ACTIVE,
    fontFamily:Fonts.BOLD
  },
  genreListContainer:{
    paddingVertical:10,
  },
});

export default HomeScreen;