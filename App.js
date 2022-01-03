import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBackground = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const resetBackground = () => {
    setRandomColor('rgb(32, 0, 126)');
  }

  return (
    <>
      {/* <View style={{ backgroundColor: "rgb(32, 0, 160)" }}> */}
      <StatusBar backgroundColor = {randomColor}/>
        <View style={[styles.container, {backgroundColor: randomColor}]}>
          <TouchableOpacity onPress={changeBackground}>
            <Text style={styles.text}>Tap Me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={resetBackground}>
            <Text style={[styles.text, {marginTop: '10%'}]}>Reset</Text>
          </TouchableOpacity>
        </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    backgroundColor: '#BB2CD9',
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
});
