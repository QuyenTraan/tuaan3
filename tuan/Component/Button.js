import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native"
import { create } from "uuid-js";
import CHOICES from "./CHOICES";

function Button(props) {
    return  CHOICES.map(item => {``
                return (
                    <TouchableOpacity 
                    key={item.name}
                    style={styles.buttonStyle } 
                    onPress={()=>props.onPressButton(item.name)}
                        
                    >
                        <Text style={styles.buttonText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })
        
    
}
const styles=StyleSheet.create(
    {
       
        buttonStyle: { width: 200, margin: 5, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#640D14', },
         buttonText: { fontSize: 25, color: 'white', fontWeight: 'bold', },
    }
)
export default Button