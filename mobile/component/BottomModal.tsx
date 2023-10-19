import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const BottomModalComponent = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['25','50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    // setVisibleModal(!visibleModal)
    console.log("pressed");
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    // <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={styles.bottomSheetContainer}>
          <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
              <View style={styles.bottomContentContainer}>
                <Text>Awesome 🎉</Text>
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>

      /* </GestureHandlerRootView> */
  )
};

export default BottomModalComponent

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  bottomContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})



