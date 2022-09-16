import {LikeButton} from "./LikeButton";
import {CommentButton} from "./CommentButton";
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {useState} from "react";
import {DelPost} from "./DelPost";
import 'react-native-gesture-handler';
import {getData} from "../../axios/asyncStorage";
import {addLike} from "../../axios/community";

export const PostComponent = ({navigation, content}) => {
    const [like, setLike] = useState(false);
    const [like_cnt, setLike_cnt] = useState(content.like_cnt)
    const onPressEvent = () => {
        navigation.navigate('CommunityComment',{"board": content})
    }
    const onLikePress = async () => {
        const user = await getData('userInfo')
        const result = await addLike({
            "user": user,
            "like_posts": content.id
        })
        console.log(result);
        setLike(!like);
        if (!like) setLike_cnt(like_cnt+1);
        else setLike_cnt(like_cnt-1);
    }

    return <Pressable style={styles.postBox}>
        <View>
            <View style={styles.upperBox}>
                <View style={styles.del}>
                    <Text style={styles.title}>{content.title}</Text>
                    <DelPost/>
                </View>
                <Text style={styles.region}>{content.location}</Text>
                <Text style={styles.content}>{content.content}</Text>
            </View>
            <View style={styles.downBox}>
                <LikeButton title={`좋아요 ${like_cnt}개`} like={like} onPress={onLikePress}/>
                <CommentButton title={`댓글 ${content.comment_cnt}개`} onPress={onPressEvent}/>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    postBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '20px',
        borderStyle: 'solid',
        marginBottom: 20,
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
    },
    del: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
