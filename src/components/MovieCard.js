import React, {useState} from "react";
import { View,Text,StyleSheet, TouchableOpacity,Image, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import Fonts from "../constants/Fonts";
import Images from "../constants/Images";

const MovieCard=(title,poster,voteAverage,voteCount,language)=>{
    const [liked,setLiked]=useState(false);

    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imdbContainer}>
                    <Image source={Images.IMDB} style={styles.imdbImage}/>
                    <Text style={styles.imdbRating}>{voteAverage}</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>setLiked(!liked)}>
                <Ionicons 
                    name={liked?"heart":"heart-outline"} 
                    size={24} 
                    color={liked?Colors.HEART:Colors.WHITE} 
                    style={{position:"absolute", bottom:10, left:10}}
                    />
                </TouchableNativeFeedback>
            </View>
            <View>
                <Text style={styles.movieTitle} numberOfLines={3}>URI - Surgical Strike</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>Hindi | (U/A)</Text>
                    <View style={styles.rowAndCenter}>
                       <Ionicons 
                        name="heart" 
                        size={17} 
                        color={Colors.HEART} 
                        style={{marginRight:5}}
                        />
                        <Text style={styles.movieSubTitle}>90%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.ACTIVE,
        height: 340,
        width:230,
        borderRadius:12,
        elevation:5,
        marginVertical:10,
    },
    movieTitle:{
        fontFamily:Fonts.EXTRA_BOLD,
        color:Colors.GRAY,
        paddingVertical:2,
        marginTop:5,
        width:230,
    },
    movieSubTitleContainer:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    movieSubTitle:{
        fontSize:12,
        fontFamily:Fonts.REGULAR,
    },
    rowAndCenter:{
        alignItems:"center",
        flexDirection:"row",
    },
    imdbContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"flex-end",
        backgroundColor:Colors.YELLOW,
        borderBottomLeftRadius:5,
        paddingVertical:3,
    },
    imdbImage:{
        height:20,
        width:50,
        borderBottomLeftRadius:5,

    },
    imdbRating:{
        marginRight:5,
        color:Colors.HEART,
        fontFamily:Fonts.BOLD,
    },
})

export default MovieCard;