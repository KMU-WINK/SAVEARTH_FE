import {Text, View, StyleSheet} from "react-native";

export const CommentComponent = ({comment}) => {
    return <View style={styles.upperBox}>
        <Text style={styles.nickname}>{comment.user}</Text>
        <Text style={styles.commentContent}>{comment.comment}</Text>
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
