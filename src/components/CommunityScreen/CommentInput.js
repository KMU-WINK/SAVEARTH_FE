import { StyleSheet, TextInput, View} from 'react-native';
import {CommunityComBtn} from "./CommunityComBtn";

function CommentInput({comment, setComment, onPress, placeholder}){
    return(
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={comment}
                    onChangeText={setComment}
                    multiline={true}
                />
                <CommunityComBtn title="v" onPress={onPress}/>
            </View>
        </View>

    );
}
export default CommentInput;

const styles = StyleSheet.create({
    container:{
        height: 160,
        paddingTop: 20,
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
        // justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        height: '40%',
        width: '100%',
    },
    input:{
        width: '90%',
        fontFamily: 'NotoSansKR_400Regular',
        fontSize:15,
        paddingLeft: 16,
        paddingRight: 14,
    },
});
