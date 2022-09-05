import { View, StyleSheet,SafeAreaView, Pressable, Text, Image } from "react-native";

function BackBar({none, text, pressHandler}){
    return (
        <View style={styles.container}>
            {!none && <Pressable onPress={pressHandler}>
                <Image style={styles.image} source={require('../SettingScreen/topbarArrow.png')}/>
            </Pressable>}
            <View style={styles.area}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}
export default BackBar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'flex-start',
        width: 36,
        height:36,
    },
    image:{
        width:36,
        height:36,
        // marginLeft: '3%'
    },
    area:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:34,
        fontFamily: 'NotoSansKR_700Bold',
        fontWeight:'bold',
    },
})