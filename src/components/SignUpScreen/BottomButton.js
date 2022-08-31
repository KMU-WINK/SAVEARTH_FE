import {StyleSheet, Text, Pressable } from 'react-native';

function BottomButton({text, pressHandler, buttonControl}){
    return (
        <Pressable style={buttonControl?styles.activeButton:styles.button} onPress={pressHandler}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
export default BottomButton;

const styles = StyleSheet.create({
    button:{
        width:344,
        height: 52,
        backgroundColor: '#B1B1B1',
        alignSelf: 'center',
        justifyContent:'center',
        borderRadius: 100,
        marginTop:20,
        marginBottom: 40
    },
    activeButton:{
        width:344,
        height: 52,
        backgroundColor: '#218EF2',
        alignSelf: 'center',
        justifyContent:'center',
        borderRadius: 100,
        marginTop:20,
        marginBottom: 40
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'NotoSansKR_700Bold',
        fontSize:15
        
    }
})