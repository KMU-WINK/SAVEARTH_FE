import {PostComponent} from "./PostComponent";
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';

export const PostList = ({navigation}) => {
    return <SafeAreaView style={styles.record}>

        <Text style={styles.headerTitle}>커뮤니티</Text>
        {[0, 1, 2, 3, 4].map((index)=>{
            return <PostComponent key={`Community-post-${index}`} navigation={navigation}/>
        })}
    </SafeAreaView>

}

const styles = StyleSheet.create({
    record: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    select: {
        width: "10%",
        color: "red"

    },
    headerTitle: {
        color: 'black',
        fontSize: '34',
        fontWeight: 'bold',
        display: 'flex',
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: '5%'
    },
});

// dropdown
// import SelectDropdown from  'react-native-select-dropdown';
{/*<SelectDropdown*/}
{/*    style={styles.select}*/}
{/*    data = {regions}*/}
{/*    onSelect={(selectedItem, index) => {*/}
{/*        console.log(selectedItem, index)*/}
{/*    }}*/}
{/*    buttonTextAfterSelection={(selectedItem, index) => {*/}
{/*        return selectedItem*/}
{/*    }}*/}
{/*    rowTextForSelection={(item, index) => {*/}
{/*    }}*/}
{/*    defaultButtonText={"지역"}*/}
{/*    // defaultValueByIndex={0}*/}
