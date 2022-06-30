import React, { useState, useEffect } from 'react';
import {styles} from './style' 
import {
    Alert,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';

import {useSelector, useDispatch} from 'react-redxux'; 
import {setTask, removeTask} from '../redux/actions';

const COLORS = {primary: '#164263', white: '#fff', grey: '#abb7b1'};

export const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <Text
          style={[
            styles.taskTitletTheme,
            {textDecorationLine: todo?.completed ? 'line-through' : 'none'},
          ]}>
          {todo?.task}
        </Text>
        <Text style={styles.taskDateTheme}> {todo?.dateTime}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => markTodoComplete(todo.id)}>
            <View style={[styles.doneIcon]}>
              <Icon
                name="done"
                size={20}
                color={todo?.completed ? COLORS.primary : COLORS.grey}
              />
            </View>
          </TouchableOpacity>

          <View />
          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <View style={styles.deleteIcon}>
              <Icon name="delete" size={20} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };