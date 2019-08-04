import React from 'react';
import { StyleSheet, View, Text,Alert } from 'react-native';
import GameStatus from "./Component/GameStatus";
import Button from "./Component/Button";
import Play from './Component/playerCard';

import CHOICES from "./Component/CHOICES";


import { randomComputerChoice, getRoundOutcome } from './Component/random'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userChoice: {},
      computerChoice: {},
    
    
      result: 'make your choice'

    }
  }
  onPressButton = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice)
    const computerChoice = randomComputerChoice()
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
   
  


    this.setState({ userChoice, computerChoice, result })
   
  }

 
  render() {

    return (

      <View style={styles.container}>
        <View style={styles.GameStatusWrapper}>
          <GameStatus
            result={this.state.result} />
        </View>
        <View style={styles.playerCardWrapper}>
          <View style={styles.choicesContainer}>
            <Play
              playerName="you"
              choice={this.state.userChoice}
           
            />
            <Text>
              VS
        </Text>
            <Play
              playerName="Computer"
              choice={this.state.computerChoice}
         
            />
      {/* <Once/> */}

      
          </View>


        </View>

        <View style={styles.ButtonWrapper}>
          <Button onPressButton={this.onPressButton} />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#e9ebee'

  },
  GameStatusWrapper: {
    flex: 0.1,
marginTop:20,
  },
  playerCardWrapper: {

    flex: 0.55
  },
  ButtonWrapper: {
    flex: 0.3,


    justifyContent: "space-around",
    alignItems: "center"



  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 60,
    shadowRadius: 5,
    paddingBottom: 60,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },


});
