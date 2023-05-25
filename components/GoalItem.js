import {StyleSheet, Text, View, Pressable} from 'react-native';

function GoalItem(props) {

    return( 
      <View style = {style.goalsList}>
        <Pressable android_ripple={{color: '#dddddd'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && style.pressedItem}
        >
        <Text style = {style.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    );
};

export default GoalItem;

const style = StyleSheet.create({

    goalsList:{
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#33383D',
        borderColor: 'cyan',
      },
    
      pressedItem: {
        opacity: 0.5,
      },

      goalText: {
        padding: 8,
        color: 'cyan',
      }
});