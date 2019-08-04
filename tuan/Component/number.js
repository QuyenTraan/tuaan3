  
  
  
  
  
  import React from "react";
  import { View, Text, StyleSheet } from "react-native"
  
  
  const One = (props) => {
     
      return (
       
  <View style={styles.numbersContainer}>
  <Text style={styles.numbersText}>
    Total games played: {props.totalPlayed}
  </Text>
  <Text style={styles.numbersText}>Total games won: {props.totalWons}</Text>
  <Text style={styles.numbersText}>
    Total games lost: {props.totalLosts}
  </Text>
  <Text style={styles.numbersText}>Total game tied: {props.totalTied}</Text>
</View>
   
      )
  }
  const styles = StyleSheet.create({
     numbersContainer:{
       flex:1,
       backgroundColor:"grey"
     }
  
  })
  
  export default One
  
  
  
  
  
  
 