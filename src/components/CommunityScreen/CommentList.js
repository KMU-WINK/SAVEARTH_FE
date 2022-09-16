import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {LikeButton} from "./LikeButton";
import {useEffect, useState} from "react";
import {CommentComponent} from "./CommentComponent";
import CommentInput from "./CommentInput";
import {CommentButton} from "./CommentButton";
import SettingTopbar from "../SettingScreen/SettingTopbar";
import {addComment, addLike, getComment} from "../../axios/community";
import {getData} from "../../axios/asyncStorage";

export const CommentList = ({navigation, route}) => {
    // {"board": {"comment_cnt": 1, "content": "test", "id": 1, "like_cnt": 1, "location": "서울", "title": "test", "user": "pyo"}}
    const board = route.params.board;
    const [comments, setComments] = useState([]);
    const[newComment, setNewComment] = useState('');
    const [like_cnt, setLike_cnt] = useState(board.like_cnt);
    const [like, setLike] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect( () => {
        if (board.comment_cnt === 0) return;
        async function fetchComment() {
            const result = await getComment(board.id);
            console.log(result.data);
            return result.data;
        }
        fetchComment().then(r => setComments(r));
    },[refresh]);

    const postComment = async () => {
        const result = await addComment({
            "board": board.id,
            "comment": newComment,
        })
        if (result === 201) {
            setNewComment('');
            setRefresh(!refresh);
        }
        else alert('다시 시도해주세요');
    }

    const onLikePress = async () => {
        const user = await getData('userInfo')
        const result = await addLike({
            "user": user,
            "like_posts": board.id
        })
        console.log(result);
        setLike(!like);
        if (!like) setLike_cnt(like+1);
        else setLike_cnt(like-1);
    }

    return <SafeAreaView style={{backgroundColor: 'white'}}>
        <SafeAreaView style={styles.entire}>
            <SettingTopbar text="커뮤니티" pressHandler={()=>navigation.navigate('CommunityBoard')}/>
            <View style={styles.postBox}>
                <ScrollView>
                    <View style={styles.postContent}>
                        <View style={styles.upperBox}>
                            <Text style={styles.title}>{board.title}</Text>
                            <Text style={styles.region}>{board.location}</Text>
                            <Text style={styles.content}>{board.content}</Text>
                        </View>
                        <View style={styles.downBox}>
                            <LikeButton title={`좋아요 ${like_cnt}개`} like={like} onPress={onLikePress}/>
                            <CommentButton title={`댓글 ${board.comment_cnt}개`}/>
                        </View>
                    </View>
                    {board.comment_cnt !== 0 &&
                        comments?.map((comment)=> {
                            return <CommentComponent comment={comment}/>
                        })
                    }
                </ScrollView>
            </View>
            <CommentInput comment={newComment} setComment={(text) => setNewComment(text)}
                          placeholder="댓글을 입력하세요." onPress={postComment}/>
        </SafeAreaView>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    entire: {
        marginLeft: 30,
        marginRight: 30,
    },
    postBox: {
        height: '72%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '20px',
        borderStyle: 'solid',
        marginTop: 20,
    },
    postContent: {
        borderBottomWidth : 1,
        borderBottomColor: 'black',
        borderStyle : 'solid',
        marginBottom: '2%'
        // backgroundColor: 'red'
    },
    header: {
        marginTop: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: '34',
        fontWeight: 'bold',
        display: 'flex',
        marginLeft: '5%',
        // marginTop: '5%',
        // marginBottom: '7%'
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
