import {StyleSheet, Text, View} from "react-native";
import {LikeButton} from "./LikeButton";
import {useState} from "react";
import {CommentComponent} from "./CommentComponent";

export const CommentList = () => {
    const [like, setLike] = useState(false);
    return <View style={styles.postBox}>
        <View style={styles.upperBox}>
            <Text style={styles.title}>게시글 제목</Text>
            <Text style={styles.region}>서울시</Text>
            <Text style={styles.content}>내용내용내용내용</Text>
        </View>
        <View style={styles.downBox}>
            {like?
                <LikeButton title={"좋아요 취소하기"} onPress={()=>setLike(false)}/>
                :
                <LikeButton title={"좋아요"} onPress={()=>setLike(true)}/>
            }
        </View>
        <CommentComponent/>
    </View>
}


const styles = StyleSheet.create({
    postBox: {
        width: '85%',
        height: '80%',
        // height: '20',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '20px',
        borderStyle: 'solid',
        marginBottom: '3%',
        margin: '7%'
    },
    title: {
        fontSize: '17',
        fontWeight: 'bold'
    },
    region: {
        fontSize: '12',
        marginTop: '1%'
    },
    upperBox: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingTop: '5%',
    },
    downBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%'

    },
    content: {
        fontSize: '17',
        marginTop: '4%'
    },
    comment: {
        fontSize: '12',
    }
});