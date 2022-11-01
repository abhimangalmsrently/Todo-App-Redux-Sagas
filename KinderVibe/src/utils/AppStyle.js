import { StyleSheet } from "react-native"
import Colors from "./Colors";

const AppStyles = StyleSheet.create({
    textInputTheme:{
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        height: 68,
        width: '100%',
        margin: 12,
        
    },
    centeredView: {
        flex: 1,
        height: '100%',
        margin: 12,
      },
      buttonTheme: {
        height: 68,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 8,
        // position: 'absolute',
        // bottom: 0,
        // right:0,
        // left: 0,
        
      },
      buttonTextTheme: {
        fontSize: 18,
        color: Colors.buttonTextColor,
      },
      descr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
      },
    
      descrText: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
      },
      header: {
        flexDirection: 'column',
       
        marginBottom: 12,
      },
    
      headerText: {
        fontSize: 62,
        fontWeight: 'bold',
       
        color: Colors.textColor
    
    
      },
      centeredView: {
        flex: 1,
        height: '100%',
        margin: 12,
        padding: 4
      },

});

export default AppStyles;