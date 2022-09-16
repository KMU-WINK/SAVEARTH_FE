import { StyleSheet, TextInput, View, Text } from 'react-native';

function SignUpInput({name, value, setValue, placeholder, secureTextEntry}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput
                style={styles.input}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={setValue}
                placeholder={placeholder}
                />
        </View>

    );
}
export default SignUpInput;

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginBottom:16
    },
    name:{
        marginBottom:10,
        fontSize:17,
        fontFamily: 'NotoSansKR_100Thin'
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: 62,
        paddingHorizontal:24,
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:17,
        textAlign:'center'
    },
    message:{
        marginTop:10,
        fontSize: 12,
        fontFamily: 'NotoSansKR_400Regular',
        color:'#E0E0E0'
    }
  });
