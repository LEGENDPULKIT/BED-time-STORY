import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import * as firebase from 'firebase'
import { Searchbar } from 'react-native-paper';


export default class ReadScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      Search:'',
      Story:[],
    }
  }
  
  retriveStory=async()=>
  {
    const read=db.collection("Writers").get()
    
    
    this.setState({Story:read})
    console.log(this.state.Story)
  }
componentDidMount()
  {
    this.retriveStory()
  }
    render(){
      const Story=db.collection("Writers").get()
    return (
      <KeyboardAvoidingView behavior='padding' enabled >
       <Header
    centerComponent={{text:'STORY HUB', style: { color: '#fff', fontSize: 20 }}}
    />
    <Searchbar
    placeholder="Type Here.."
    onChangeText={this.updateSearch}
    />
    <FlatList
    data={Story}
    Vertical={true}
    showsVerticalScrollIndicator={false}
    renderItem={<View>
     <Text>{Story}</Text>
    </View>}
    
    />

      </KeyboardAvoidingView>
    );
  }
  }
  const styles = StyleSheet.create({

  })
    