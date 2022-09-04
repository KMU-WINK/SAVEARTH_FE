import { StyleSheet, TextInput, View, Text } from 'react-native';

function SettingNicknameInput({name, value, setValue, placeholder}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                ></TextInput>
        </View>
        
    );
}
export default SettingNicknameInput;

const styles = StyleSheet.create({
    container:{
        marginBottom:16,
        marginTop: 22
    },
    name:{
        textAlign: 'center',
        marginBottom:10,
        fontSize:17,
        fontFamily: 'NotoSansKR_100Thin'
    },
    input:{
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        width:343,
        height: 62,
        textAlign: 'center',
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:17,
        paddingHorizontal:24
    },
  });