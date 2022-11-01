import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';

import {useSelector, useDispatch} from 'react-redux'
import { changeCount } from '../actions/actions';

const IntroAgeScreen_3Api = () => {

  const itemCount= useSelector(state => state.countReducer.count);  
  const dispatch = useDispatch();

  console.log('itemCount', itemCount);
  
  // const [itemCount, setItemCount] = React.useState();

  const incrementValue = () => {
    console.log('itemCount', itemCount);
    // setItemCount(itemCount + 1);

   dispatch(changeCount());

    //to increment parent counter
    props.incrementParentCount();
  };

  return (
    <View>
      <CustomHeader title={itemCount} />
      <CustomDescr title="Screen 2 counter," />
      <CustomButton title={'Button 3'}  onClick={() => {dispatch(changeCount())}}/>
    </View>
  );
};

export default IntroAgeScreen_3Api;
