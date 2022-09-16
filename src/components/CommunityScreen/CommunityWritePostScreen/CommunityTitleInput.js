import { StyleSheet, TextInput, View} from 'react-native';

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
        marginBottom:10,
        marginTop:10,
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: 56,
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:17,
        paddingHorizontal:21
    }
  });
