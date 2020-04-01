/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HuntStack from './routes';
import './config/StatusBarConfig';

export default function App() {
  return (
    <NavigationContainer>
      <HuntStack />
    </NavigationContainer>
  );
}
