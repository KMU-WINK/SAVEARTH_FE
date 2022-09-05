import { View, StyleSheet, Pressable, Text, Image } from "react-native";

function SettingTopbar({text, pressHandler}){
    return (
        <View style={styles.container}>
            <Pressable onPress={pressHandler}>
                <Image style={styles.image} source={require('./topbarArrow.png')}/>
            </Pressable>
            <View style={styles.area}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Image style={styles.image} source={null}/>
        </View>
    )
}
export default SettingTopbar;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
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
        fontFamily: 'NotoSansKR_700Bold',
    },
})
