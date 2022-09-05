import {StyleSheet, Text, Pressable } from 'react-native';

function CommunityButton({text, pressHandler}){
    return (
        <Pressable style={styles.button} onPress={pressHandler}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}
export default CommunityButton;

const styles = StyleSheet.create({
    button:{
        width:280,
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