import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {LikeButton} from "./LikeButton";
import {useState} from "react";
import {CommentComponent} from "./CommentComponent";
import CommentInput from "./CommentInput";
import {CommentButton} from "./CommentButton";
import SettingTopbar from "../SettingScreen/SettingTopbar";

export const CommentList = ({navigation}) => {
    const [like, setLike] = useState(false);
    return <SafeAreaView style={{backgroundColor: 'white'}}>
        <SafeAreaView style={styles.entire}>
            <SettingTopbar text="커뮤니티" pressHandler={()=>navigation.navigate('CommunityBoard')}/>
            <View style={styles.postBox}>
                <ScrollView>
                    <View style={styles.postContent}>
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

                            <CommentButton title={"댓글"}/>
                        </View>
                    </View>

                    <CommentComponent/>
                    <CommentComponent/>
                    <CommentComponent/>
                    <CommentComponent/>
                    <CommentComponent/>
                    <CommentComponent/>
                </ScrollView>
            </View>
            <CommentInput placeholder="댓글을 입력하세요."/>
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
