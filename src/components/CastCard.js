import React from "react";
import { View,StyleSheet,Text,Image} from "react-native";
import { getPoster } from "../services/MovieService";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Images from "../constants/Images";

const CastCard=({originalName,characterName,image})=>{
    return(
        <View style={styles.conatainer}>
            <Image 
                style={styles.image}   
                source={image?{uri:getPoster(image)}:Images.NO_IMAGE} 
                resizeMode={image?"cover":"contain"}/>
            <Text style={styles.originalName} numberOfLines={2}>{originalName}</Text>
            <Text style={styles.characterName} numberOfLines={2}>{characterName}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    conatainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:5,
    },
    image:{
        height:120,
        width:80,
        borderRadius:10,
    },
    originalName:{
        width:80,
        color:Colors.BLACK,
        fontFamily:Fonts.BOLD,
        fontSize:12,
    },
    characterName:{
        width:80,
        color:Colors.LIGHT_GRAY,
        fontFamily:Fonts.BOLD,
        fontSize:10,
    }
})

export default CastCard