import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//From validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be more than 4 characters')
    .max(16, 'should be max 0f 16 characters')
    .required('Length is required'),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
