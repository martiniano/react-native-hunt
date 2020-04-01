import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({route, navigation}) => (
  <WebView source={{uri: route.params.product.url}} />
);

Product.navigationOptions = ({route, navigation}) => ({
  title: route.params.product.title,
});

export default Product;
