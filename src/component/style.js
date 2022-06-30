import {StyleSheet} from 'react-native';

const COLORS = {
  primary: '#2ABB9B',
  primaryVarient: '#2ABB80',
  white: '#fff',
  grey: '#abb7b1',
  lightGrey: '#D9E7E2',
  black: '#00001'
};

export const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: COLORS.primary,
    padding: 20,
    height: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 45,
    borderBottomStartRadius: 45,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 18,
  },
  newTaskView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 30,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 30,
    borderTopRightRadius: 25,
    borderTopLeftRadius:8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  inputContainer: {
    height: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 8,
    marginRight: 30,
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.primaryVarient,
    elevation: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputTheme: {
    fontSize: 14,
    color: COLORS.grey,
  },
  listItem: {
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    elevation: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  titleContainerTheme: {
    padding: 8,
    marginTop: 8,
    marginStart: 12,
    justifyContent: 'center',
  },
  emptyListPlaceHolder: {
    padding: 8,
    margin: 12,
    alignItems: 'center',
    fontSize: 14,
    flex: 1,
    color: COLORS.grey,
  },

  titleTextTheme: {
    fontSize: 18,
    alignItems: 'flex-start',
    color: COLORS.primaryVarient,
  },
  taskTitletTheme: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',
    margin: 8,
  },
  taskDateTheme: {
    fontSize: 12,
    color: COLORS.grey,
    marginTop: 4,
    marginRight: 8,
    marginLeft: 8,
  },
  doneIcon: {
    height: 25,
    width: 25,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 6,
    borderWidth: 2,
    overflow: 'hidden',
  },
  deleteIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    overflow: 'hidden',
    color: COLORS.primaryVarient,
  },

  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 100,
    marginHorizontal: 20,
    elevation: 40,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    height: 0,
    
  },

  touchableTheme: {
    height: 45,
    backgroundColor: COLORS.primaryVarient,
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20

  },
  modalTitleTextTheme: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    
    justifyContent: 'center',
    margin: 14,
    color: COLORS.primary,
  },
  modalTextInput:{
    width: '90%',
    height: 50,
    padding: 8,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 14,
    color: 'grey'
  },
  touchableText: {
    fontSize: 14,
    color: COLORS.white,
    marginTop: 12,
  },
});
