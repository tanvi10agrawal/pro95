import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class ForestScreen extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
       <View> <Image  source={require('../assets/cibola.jpg')} style={styles.iconImage1}/>
       <Text style={styles.text1}> Cibola National Forest </Text>
       <Image source={require('../assets/tongass.jpg')} style={styles.iconImage2}/> 
       <Text style={styles.text2}> Tongass National Forest </Text>
        <Image source={require('../assets/teton.jpg')} style={styles.iconImage3}/>
        <Text style={styles.text3}> Bridger-Teton National Forest </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  iconImage1:{
    position:'absolute',
    margin:100,
    borderRadius:80,
    alignItems:'left',
    justifyContent:'space-around',
    margin:100,
    alignSelf: 'left',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5,
  },
  iconImage2:{
    position:'absolute',
    margin:20,
    borderRadius:80,
    alignItems:'center',
    justifyContent:'space-around',
    margin:100,
    alignSelf: 'center',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  iconImage3:{
    position:'absolute',
    marginLeft:1025,
    borderRadius:80,
    alignItems:'right',
    justifyContent:'space-around',
    margin:100,
    paddingRight: 200,
    alignSelf: 'right',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  text1:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:435,
    marginLeft:165,
    backgroundColor:'#C1ACE9',
    width:260,
    borderWidth: 2,
    borderColor: 'black',
  },
  text2:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:-30,
    marginLeft:625,
    backgroundColor:'#C1ACE9',
    width:275,
    borderWidth: 2,
    borderColor: 'black',
  },
  text3:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
    flex:1,
    flexDirection:'row',
    marginTop:-30,
    marginLeft:1060,
    backgroundColor:'#C1ACE9',
    width:340,
    borderWidth: 2,
    borderColor: 'black',
  },

  viewStyle:{
    justifyContent:'space-between',
    padding: 5,
    flex:1,
    flexDirection: 'column',
  },
});