import { StyleSheet, TextInput } from 'react-native';

function CommunityTextInput({ value, setValue, placeholder}){
    return(
        <TextInput
            multiline={true}
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
        />

    );
}
export default CommunityTextInput;

const styles = StyleSheet.create({
    input:{
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: "65%",
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:17,
        paddingHorizontal:20,
        paddingTop:8
    }
  });
