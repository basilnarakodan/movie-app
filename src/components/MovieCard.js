import React, {useState} from "react";
import { View,Text,StyleSheet, TouchableOpacity,Image, TouchableNativeFeedback, ImageBackground} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import Fonts from "../constants/Fonts";
import Images from "../constants/Images";
import { getPoster, getLanguage } from "../services/MovieService";


const MovieCard=({title,poster,voteAverage,voteCount,language,size=1,heartless,onPress})=>{
    const [liked,setLiked]=useState(false);
    const [voteCountValue,setVoteCountValue]=useState(voteCount);

    const posterLook=require('../../assets/images/poster.jpg');
    
    return(
        <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
            <ImageBackground 
                style={{...styles.container,width:230*size,height:340*size}} 
                source={{uri: getPoster(poster)}}
                imageStyle={{borderRadius:12}}>
                <View style={{...styles.imdbContainer, paddingVertical:3*size}}>
                    <Image source={Images.IMDB} style={{...styles.imdbImage,height:20*size,width:50*size}}/>
                    <Text style={{...styles.imdbRating,marginRight:5*size,fontSize:14*size}}>{voteAverage}</Text>
                </View>

                {!heartless ? (
                <TouchableNativeFeedback onPress={()=>{
                    setLiked(!liked);
                    setVoteCountValue(liked?voteCountValue-1:voteCountValue+1);
                    }}>
                <Ionicons 
                    name={liked?"heart":"heart-outline"} 
                    size={24*size} 
                    color={liked?Colors.HEART:Colors.WHITE} 
                    style={{position:"absolute", bottom:10, left:10}}
                    />
                </TouchableNativeFeedback>
                ) : null}
            </ImageBackground>
            <View>
                <Text style={{...styles.movieTitle,fontSize:14*size,width:230*size,marginTop:5*size}} numberOfLines={3}>{title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={{...styles.movieSubTitle,fontSize:12*size}}>{getLanguage(language).english_name}</Text>
                    <View style={styles.rowAndCenter}>
                       <Ionicons 
                        name="heart" 
                        size={17} 
                        color={Colors.HEART} 
                        style={{marginRight:5}}
                        />
                        <Text style={{...styles.movieSubTitle,fontSize:12*size}}>{voteCountValue}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
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

MovieCard.defaultProps={
    size:1,
    heartless:true,
}
export default MovieCard;