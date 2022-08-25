import { StyleSheet, Text, Pressable, Image } from 'react-native';

function SettingMenuButton({text, pressHandler}){
    return (
        <Pressable style={styles.container} onPress={pressHandler}>
            <Text style={styles.text}>
                {text}
            </Text>
            <Image style={styles.image} source={require('./settingMenuArrow.png')}/>
        </Pressable>

    )
}
export default SettingMenuButton;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:20,
        width:354.04,
        height: 66,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:1,
        marginBottom:10,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    text:{
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:22,
    },
    image:{
        width:27.04,
        height: 34.45,
    }
})