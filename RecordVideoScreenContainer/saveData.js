import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import firebase from 'firebase';

import styles from './styles';

export default ({captures=[]}) => (
    <ScrollView
        horizontal={true}
        style={[styles.bottomToolbar, styles.galleryContainer]}
    >
        {captures.map(({ uri }) => (
          var ref = firebase.storage().ref().child("hello");
            const response = await fetch(uri);
            const blob = await response.blob();
            return ref.put(blob);
        ))}
    </ScrollView>
);
