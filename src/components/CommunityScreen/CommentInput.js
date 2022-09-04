import { StyleSheet, TextInput, View, Text } from 'react-native';
import {CommunityComBtn} from "./CommunityComBtn";

function CommentInput({name, value, setValue, placeholder}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={setValue}
                >
                </TextInput>
                <CommunityComBtn title="v" onPress={()=>console.log("지료완롱")}/>
            </View>
        </View>

    );
}
export default CommentInput;

const styles = StyleSheet.create({
    container:{
        height: 150,
        // margin: '0 30',
    },
    name:{
        textAlign: 'center',
        marginBottom:10,
        fontSize:12,
        fontFamily: 'NotoSansKR_100Thin'
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: '30%',
    },
    input:{
        height: '30%',
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:15,
        paddingHorizontal: 25,
    },
});