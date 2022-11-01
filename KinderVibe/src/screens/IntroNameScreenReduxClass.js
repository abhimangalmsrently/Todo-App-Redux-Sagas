import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';
import AppStyles from '../utils/AppStyle';
import IntroAgeScreen_3 from './IntroAgeScreenRedux';

import { changeCount } from '../actions/actions';
import {connect } from 'react-redux';


class IntroScreenReduxClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount :0,
    };
  }



  render() {  

    return (
      <View style={AppStyles.centeredView}>
        <CustomHeader title={this.props.itemCount} />
        <CustomDescr title= "Screen 1 counter," />
        <CustomButton 
        onClick={() => this.props.onIncrementClick()} 
        title={'Button 1'} />

        <IntroAgeScreen_3/> 

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

console.log("mapDispatchToProps");
 return {
  onIncrementClick: () => {
    dispatch(changeCount());
  }
 }


} 



const mapStateToProps = (state) =>{
  
  console.log('mapStateToProps*******', state);
    return{
      itemCount : state.countReducer.count
    
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(IntroScreenReduxClass);
