import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';

const IntroAgeScreen_2 = props => {
  const [itemCount, setItemCount] = React.useState();

  const incrementValue = () => {
    console.log('itemCount', itemCount);
    setItemCount(itemCount + 1);

    //to increment parent counter
    props.incrementParentCount();
  };

  return (
    <View>
      <CustomHeader title={props.itemCount} />
      <CustomDescr title="Screen 2 counter," />
      <CustomButton onClick={() => incrementValue()} title={'Button 2'} />
    </View>
  );
};

export default IntroAgeScreen_2;
