import React, { Component} from 'react';
import { View } from 'react-native';
import AppStyles from '../utils/AppStyle';
import CustomHeader from '../components/CustomHeader';

class DashboardScreen extends Component {
constructor(){
    super();
}

render() {
    return(
        <View style={AppStyles.centeredView}>
        <CustomHeader title="Dashboard," />
        </View>
    );
}
}

export default DashboardScreen;