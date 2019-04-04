import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Cards />
        <Footer />
      </SafeAreaView>
    );
  }
}
