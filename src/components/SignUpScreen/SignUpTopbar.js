import { View, StyleSheet, Pressable, Text, Image } from "react-native";

function SignUpTopbar({text, pressHandler}){
    return (
        <View style={styles.container}>
            <Pressable onPress={pressHandler}>
                <Image style={styles.image} source={require('./topbarArrow.png')}/>
            </Pressable>
            <View style={styles.area}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}
export default SignUpTopbar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:30,
        width: 343,
        height: 41,
    },
    image:{
        width:36,
        height:36,
    },
    area:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:34,
        fontWeight:'bold',
        fontFamily: 'NotoSansKR_700Bold',
        width:128,
    }
})