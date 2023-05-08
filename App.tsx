/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './Navigation'
import { AuthProvider } from './src/Context/AuthContext';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
