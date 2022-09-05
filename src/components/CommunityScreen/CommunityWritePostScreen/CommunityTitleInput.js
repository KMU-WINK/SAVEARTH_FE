import { StyleSheet, TextInput, View, Text } from 'react-native';

function CommunityTitleInput({ value, setValue, placeholder}){
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
        </View>

    );
}
export default CommunityTitleInput;

const styles = StyleSheet.create({
    input:{
        marginBottom:20,
        marginTop:30,
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: 62,
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:17,
        paddingHorizontal:21
    }
  });
