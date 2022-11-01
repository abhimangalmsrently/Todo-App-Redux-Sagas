import React, {Component, useEffect} from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';
import AppStyles from '../utils/AppStyle';
import IntroAgeScreen from './IntroAgeScreen';
import IntroAgeScreen_2 from './IntroAgeScreen_2';
import IntroAgeScreen_3 from './IntroAgeScreenRedux';

import {useSelector, useDispatch, connect} from 'react-redux';
import {changeCount} from '../actions/actions';

const IntroScreenRedux = () => {
  const itemCount = useSelector(state => state.countReducer.count)
  const dispatch = useDispatch();

  return (
    <View style={AppStyles.centeredView}>
      <CustomHeader title={itemCount} />
      <CustomDescr title="Screen 1 counter," />
      <CustomButton title={'Button '} onClick={() => {dispatch(changeCount())}}  />

      <IntroAgeScreen_3/>
      
    </View>
  );
};

export default IntroScreenRedux;
