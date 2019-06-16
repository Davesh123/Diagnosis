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
            <View style={styles.galleryImageContainer} key={uri}>
                <Image source={{ uri }} style={styles.galleryImage} />
            </View>
        ))}
    </ScrollView>
);


//  {FileSystem.copyAsync({
  //    from: uri,
  //    to: FileSystem.documentDirectory + 'videos'})
//
//    }
