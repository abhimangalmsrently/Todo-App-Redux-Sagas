import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';
import ListItem from './ListItem';
import moment from 'moment';


import {useSelector, useDispatch} from 'react-redux';
import {setTask, removeTask, markTask, updateTask} from '../redux/actions';

import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Keyboard,
  Modal,
  Touchable,
} from 'react-native';
import {set} from 'immer/dist/internal';

const COLORS = {
  primary: '#2ABB9B',
  primaryVarient: '#2ABB80',
  white: '#fff',
  grey: '#abb7b1',
  lightGrey: '#D9E7E2',
  black: '#00001'
};

export const Todo = () => {
  const task = useSelector(state => state.taskName);

  const dispatch = useDispatch();

  const [data, setdata] = React.useState();
  const [textInput, setTextInput] = React.useState('');

  const [modalTextInput, setModalTextInput] = React.useState('');
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const [editItem, seteditItem] = useState(false);

  const [isRender, setisRender] = useState(false);

  const renderItem = ({item}) => <ListItem task={item} />;

  const editTaskName = task => {
    // dispatch(markTask(task));

    setisModalVisible(true);
    setModalTextInput(task.task);
    console.log('task.id', task.taskId);
    seteditItem(task.taskId);
  };

  const handleEditItem = editItem => {
    const newData = task.map(item => {
      
    if (item.taskId == editItem) {
        item.task = modalTextInput;
        console.log('task changed', item.task);
        return item;
      }
      return item;
    });
    // console.log('task updated', newData);

   // setdata(newData);
   
    dispatch(updateTask(newData));
    setisRender(!isRender);
     
  };

  const saveEdit = () => {
    // console.log('task LOG', task[index]);

    handleEditItem(editItem);
    setisModalVisible(false);
  };

  const markTodoComplete = task => {
    dispatch(markTask(task));
  };

  const deleteTodo = task => {

    Alert.alert(
      "Are you sure !!",
      "Deleting a task cannot be undone.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(removeTask(task)) }
      ]
    );

    
  };

  const addTodo = () => {
    var dateAndTime = moment().format('DD/MM/YYYY hh:mm a');

    if (textInput == '') {
      Alert.alert('Sorry !', 'Task should not be empty.');
    } else {
      const newTodo = {
        taskId: Math.random(),
        task: textInput,
        dateTime: dateAndTime,
        completed: false,
      };

      // setTodos([...todos, newTodo]);
      dispatch(setTask(newTodo));
      setTextInput('');
      console.log("addtask");
      <View pointerEvents="none"></View>;
    }
  };

  const ListItem = ({task, index}) => {
    return (
      <TouchableOpacity onLongPress={()=>editTaskName(task)} activeOpacity={1}>
      <View style={[styles.listItem, {backgroundColor : task?.completed ? COLORS.lightGrey : COLORS.white}]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              styles.taskTitletTheme,
              {textDecorationLine: task?.completed ? 'line-through' : 'none'},
            ]}>
            {task?.task}
          </Text>

          <TouchableOpacity onPress={() => editTaskName(task)}>
            <View style={[styles.deleteIcon]}>
              <Icon name="edit" size={20} color={COLORS.grey} />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.taskDateTheme}> Task created: {task?.dateTime}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => markTodoComplete(task)}>
            <View style={[styles.doneIcon]}>
              <Icon
                name="done"
                size={20}
                color={task?.completed ? COLORS.primary : COLORS.grey}
              />
            </View>
          </TouchableOpacity>

          <View />
          <TouchableOpacity onPress={() => deleteTodo(task)}>
            <View style={styles.deleteIcon}>
              <Icon name="delete" size={20} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={[styles.toolbar]}>
        <Text style={styles.title}>TODO App</Text>

        <View style={styles.newTaskView}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputTheme}
              placeholder="Add New Task"
              onChangeText={text => setTextInput(text)}
              value={textInput}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Icon name="add" size={25} color="white" onPress={addTodo} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleContainerTheme}>
        <Text style={styles.titleTextTheme}>Tasks</Text>
      </View>

      {task.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 100,
          }}
          data={task}
          keyExtractor={item => item.id?.toString()}
          renderItem={renderItem}
          extraData={isRender}
        />
      ) : (
        <Text style={styles.emptyListPlaceHolder}>Oops! No task found.</Text>
      )}

      <Modal
        animationType="fade"
        transparent = {true}
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitleTextTheme}>Change Task: </Text>
          <TextInput
            style={styles.modalTextInput}
            onChangeText={text => setModalTextInput(text)}
            defaultValue={modalTextInput}
            editable={true}
            multiline={false}
          />
          <TouchableOpacity
            style={styles.touchableTheme}
            onPress={() => saveEdit()}>
            <Text style={styles.touchableText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
