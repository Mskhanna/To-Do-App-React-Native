import { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal, Image, } from "react-native";


function GoalInput(props) {

    const[enteredGoalText, setEnteredGoalText] = useState('')
    
    //Fetching user input as the user types
  function goalInputHandler(EnteredText) {
    setEnteredGoalText(EnteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('')
  }

    return (
    <Modal visible={props.visible} animationType="fade">
      <View style={style.inputContainer}>
        <Image style={style.image} 
        source={require('../assets/images/goal.png')}
        />
        <TextInput 
          style={style.textInput} 
          placeholder='Enter Your Task Here!!' 
          onChangeText={goalInputHandler}
          value = {enteredGoalText}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>  
            <Button title='Cancel' onPress={props.onCancel} color={'coral'} />
          </View> 
          <View style={style.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color={'springgreen'} />
          </View>       
        </View>     
      </View>
    </Modal>

    );
};

export default GoalInput;

const style  = StyleSheet.create({

    inputContainer:{
        backgroundColor: 'slategray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },

      image:{
        width: 100,
        height: 100,
        margin: 20,
      },
      
      textInput: {
        color: 'darkslategrey',
        backgroundColor: 'white',
        width: '95%',
        padding: 15,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 20,
      },

      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },

      button: {
        width: 100,
        marginHorizontal: 10,

      },
});