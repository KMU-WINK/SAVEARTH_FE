import {LikeButton} from "./LikeButton";
import {CommentButton} from "./CommentButton";
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {useState} from "react";
import {DelPost} from "./DelPost";
import 'react-native-gesture-handler';

export const PostComponent = ({navigation, content}) => {
    const [like, setLike] = useState(false);

    const onPressEvent = () => {
        navigation.navigate('CommunityComment')
    }

    return <Pressable style={styles.postBox} onPress={onPressEvent}>
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
                <LikeButton title={`좋아요 ${content.like_cnt}개`} like={like} onPress={()=>setLike(!like)}/>
                <CommentButton title={"댓글"} onPress={onPressEvent}/>

            </View>
        </View>
        {/*{*/}
        {/*    clicked?*/}
        {/*        <Text style={styles.title}>눌렷다</Text>*/}
        {/*        :*/}
        {/*        <Text style={styles.title}>아니다</Text>*/}
        {/*}*/}
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
