import {Text, View, StyleSheet} from "react-native";
import {useState} from "react";


export const CommentComponent = () => {
    const [clicked, setClicked] = useState(false);
    return <View style={styles.upperBox} onPress={() => setClicked(true)}>
        <Text style={styles.nickname}>닉네임</Text>
        <Text style={styles.commentContent}>내용내용내용</Text>
    </View>
}

const styles = StyleSheet.create({

    upperBox: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingTop: '5%',
        marginBottom: '2%'
    },
    nickname: {
        fontSize: 17,
        fontWeight: "bold"
    },
    commentContent: {
        fontSize: 15,
        marginTop: "2%"
    }
})