import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomTextInput from '../components/CustomTextInput';
import CustomDescr from '../components/CustomDescr';
import AppStyles from '../utils/AppStyle';

class IntroAgeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: props.itemCount,
    };
  }

  static getDerivedStateFromProps(props, state) {

    // this.incrementValue(props.itemCount);

    console.log('Screen2 getDerivedStateFromProps ', props, state);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Screen2 getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps) {
    console.log('Screen2 componentDidUpdate',this.props, this.state);
    if((prevProps.itemCount !== this.props.itemCount)) {
        this.setState({ itemCount: this.props.itemCount});
    }

  }

  componentWillUnmount() {
    console.log('Screen2 componentWillUnmount');
  }

  incrementValue = () => {
    console.log("this.state.itemCount",this.state.itemCount);
    this.setState({itemCount: this.state.itemCount + 1});

    //to increment parent counter
    this.props.incrementParentCount(); 
    
  };

  render() {
    return (
      <View>
        <CustomHeader title={this.props.itemCount} />
        <CustomDescr title="Screen 2 counter," />
        <CustomButton
          onClick={() => this.incrementValue()}
          title={'Button 2'}
        />
      </View>
    );
  }
}

export default IntroAgeScreen;
