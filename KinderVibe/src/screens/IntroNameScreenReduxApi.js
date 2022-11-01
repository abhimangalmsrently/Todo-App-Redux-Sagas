import React, {Component, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';
import AppStyles from '../utils/AppStyle';
import IntroAgeScreen_2 from './IntroAgeScreen_2';

import {useSelector, useDispatch, connect} from 'react-redux';
import {changeCount, savePost} from '../actions/actions';
import IntroAgeScreen_3Api from './IntroAgeScreenReduxApi';

const IntroScreenReduxApi = () => {
  const postArray = useSelector(state => state.countReducer.post)
  const dispatch = useDispatch();

  //https://jsonplaceholder.typicode.com/posts

  const invokeApiPress = () => {
   dispatch(savePost());

  } 
  return (
    <View style={AppStyles.centeredView}>
      <CustomHeader title='API shows here, ' />
      
      <FlatList data={postArray} renderItem = {({item}) => {
          return <CustomDescr title = {item.body}/>
      }} />
      <CustomButton title={'Click here '} 
      onClick={() => invokeApiPress()}  />
      
    </View>
  );
};

export default IntroScreenReduxApi;
