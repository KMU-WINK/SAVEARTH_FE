import { StyleSheet, TextInput, View, Text } from 'react-native';

function BirthInput({name, yearValue, setSignUpYear, monthValue, setSignUpMonth, dayValue, setSignUpDay}){
    return(
        <View  style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.birth, styles.year]}
                    placeholder={"1970"}
                    value={yearValue}
                    onChangeText={setSignUpYear}
                    keyboardType = 'numeric'
                    maxLength={4}
                    ></TextInput>
                <TextInput
                    style={styles.birth}
                    placeholder={"01"}
                    value={monthValue}
                    onChangeText={setSignUpMonth}
                    keyboardType = 'numeric'
                    maxLength={2}
                    ></TextInput>
                <TextInput
                    style={styles.birth}
                    placeholder={"01"}
                    value={dayValue}
                    onChangeText={setSignUpDay}
                    keyboardType = 'numeric'
                    maxLength={2}
                    ></TextInput>
            </View>
        </View>
        
    );
}
export default BirthInput;

const styles = StyleSheet.create({
    container:{
        marginBottom:16
    },
    name:{
        marginBottom:10,
        fontSize:17,
        fontFamily: 'NotoSansKR_100Thin'
    },
    inputContainer:{
        flexDirection:"row",
    },
    birth:{
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        width:67,
        height: 62,
        textAlign: 'center',
        marginRight: 6,
        fontSize:17,
        paddingHorizontal:20,
    },
    year: {
        width:85,
    },
  });
