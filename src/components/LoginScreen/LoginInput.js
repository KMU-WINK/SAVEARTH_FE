import { StyleSheet, TextInput, View, Text } from 'react-native';

function LoginInput({name, value, setValue, placeholder, secureTextEntry, errorMessage}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={setValue}
            />
            {errorMessage && <Text style={styles.message}>{errorMessage}</Text>}
        </View>

    );
}
export default LoginInput;

const styles = StyleSheet.create({
    container:{
        marginBottom:20
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
    message:{
        textAlign:'center',
        marginTop:10,
        fontSize: 12,
        color: 'red'
    }
  });
