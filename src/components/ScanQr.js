import { View, Text } from 'react-native-camera-kit'
import React from 'react'
import CameraScreen from 'react';
import { Dimensions } from 'react-native';
const ScanQr = () => {
    const SCREEN_HERIGHT = Dimensions.get('screen').height
  return (
    <View style={{height: SCREEN_HERIGHT}}>
      <CameraScreen
  // Barcode props
  scanBarcode={true}
  onReadCode={(event) => Alert.alert('QR code found')} // optional
  showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
  laserColor='red' // (default red) optional, color of laser in scanner frame
  frameColor='white' // (default white) optional, color of border of scanner frame
cameraRatioOverlay={undefined}
captureButtonImage={undefined}
captureButtonImageStyle={{}}
cameraFlipImage={undefined}
cameraFlipImageStyle={{}}
hideControls={undefined}
torchOnImage={undefined}
torchOfImage={undefined}
torchImageStyle={{}}
// onBottomButtonPressed={function (): void {throw new Error('function not implemented');}}
/>
    </View>
  )
}

export default ScanQr