/* import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import ScanQr from "./ScanQr";
import { useNavigation } from "@react-navigation/native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import useAnimationState from "moti";
import { MotiView } from "moti";

const requestCameraPermession = React.useCallback(async () => {
  await Camera.requestCameraPermission();
  if (permession == "denied") await Linking.openSettings();
});
const constants = {
  scan_product_option: {
    camera: "Camera",
    qrCode: "QR Code",
  },
  // Ajoutez d'autres constantes ici
};

const ScanProduct = () => {
  const navigation = useNavigation(); // Récupérez l'objet navigation en utilisant useNavigation
  // State
  const [selectedOption, setSelectedOption] = useState(
    constants.scan_product_option.camera
  );
  // Camera
  const devices = useCameraDevices();
  const device = devices.back;

  // Moti
  const loaderAnimationState = useAnimationState({
    start: {
      opacity: 1,
    },
    stop: {
      opacity: 0,
    },
  });
  React.useEffect(() => {
    // animation
    loaderAnimationState.transitionTo("stop");
    //permession
    requestCameraPermession();
  });
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
          paddingBottom: 14,
          paddingHorizontal: 14,
          alignItems: "center",
          backgroundColor: "grey",
          zIndex: 1,
        }}
      >
        <Text>
          {" "}
          {selectedOption == constants.scan_product_option.camera
            ? "Scan Camera"
            : "Scan QR Code"}{" "}
        </Text>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 90,
          paddingTop: 50,
          paddingHorizontal: 20,
          backgroundColor: "black",
        }}
      >
        <TouchableOpacity
          style={styles.Button}
          title="Scan Qr code"
          onPress={() => {
            setSelectedOption(constants.scan_product_option.qrCode);
          }}
        >
          <Text>"Scan Qr code </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderCamera() {
    if (device == null) {
      return <View style={{ flex: 1 }}></View>;
    } else {
      return (
        <View
          style={{
            flex: 1,
          }}
        >
          <Camera
            style={{ flex: 1 }}
            device={device}
            isActive={true}
            enableZoomGesture
          ></Camera>
          * Scan Button 
          {selectedOption == constants.scan_product_option.camera && (
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                bottom: 20,
                left: 0,
                right: 0,
              }}
            >
              <IconButton
                icon={Icons.scan}
                containerStyle={{
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                iconStyle={{
                  width: 50,
                  height: 50,
                }}
              ></IconButton> 
            </View>
          )}
        </View>
      );
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {renderCamera()}
      {renderFooter()}
    </View>
  );
};

export default ScanProduct;

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    height: 35,
    borderRadius: 10,
    backgroundColor: "white",
  },
}); */ 
