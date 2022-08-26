import { StyleSheet, View, Text, Pressable } from 'react-native';

function GenderInput({name, selectedValue, leftValue, rightValue, setValue}){
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.selectContainer}>
        <Pressable
          style={selectedValue===leftValue?styles.selected: styles.unselected}
          onPress={()=>setValue(leftValue)}>
          <Text style={selectedValue===leftValue?styles.selectedText: styles.unselectedText}>{leftValue}</Text>
        </Pressable>

        <Pressable
          style={selectedValue===rightValue?styles.selected: styles.unselected}
          onPress={()=>setValue(rightValue)}>
          <Text style={selectedValue===rightValue?styles.selectedText: styles.unselectedText}>{rightValue}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GenderInput;

const styles = StyleSheet.create({
  container:{
    marginBottom:21
  },
  name:{
    marginBottom:10,
    fontSize:17,
    fontFamily: 'NotoSansKR_100Thin'
  },
  selectContainer:{
    flexDirection:"row",
  },
  unselected:{
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    width:64,
    height: 62,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  selected: {
    borderRadius: 15,
    borderWidth: 0,
    width:64,
    height: 62,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#218EF2',
  },
  selectedText:{
    color:'#FFFFFF',
    fontFamily: 'NotoSansKR_400Regular',
    fontSize:17
  },
  unselectedText:{
    color: '#000000',
    fontFamily: 'NotoSansKR_400Regular',
    fontSize:17
  }
});