import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';
import AppStyles from '../utils/AppStyle';
import IntroAgeScreen from './IntroAgeScreen';
import IntroAgeScreen_2 from './IntroAgeScreen_2';
import IntroAgeScreen_3 from './IntroAgeScreenRedux';



class IntroScreen extends Component {
  constructor(props) {
    super(props);
    
    console.log('Screen1 constructor');

    this.state = {
      itemCount :0,
    };
  }

  componentDidMount() {
    console.log('Screen1 componentDidMount');
    
  }

  static getDerivedStateFromProps() {
    console.log('Screen1 getDerivedStateFromProps ');
    return null;
  }

  componentDidUpdate(){
    console.log('Screen1 componentDidUpdate');
  }

  incrementValue = () => {
    this.setState({'itemCount':this.state.itemCount+1});
  }

  render() {  

    console.log('Screen1 render');

    return (
      <View style={AppStyles.centeredView}>
        <CustomHeader title={this.state.itemCount} />
        <CustomDescr title= "Screen 1 counter," />
        <CustomButton 
        onClick={() => this.incrementValue()} 
        title={'Button 1'} />

        <IntroAgeScreen_3
        itemCount = {this.state.itemCount}
        incrementParentCount = {this.incrementValue}
       /> 

      </View>
    );
  }
}


export default IntroScreen;
