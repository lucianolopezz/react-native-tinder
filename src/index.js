import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import Header from './components/Header';
import Cards from './components/Cards';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Cards />
      </SafeAreaView>
    );
  }
}
