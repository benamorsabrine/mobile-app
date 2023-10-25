const { getDefaultConfig } = require("metro-config");
module.exports = {
  resolver: {
    assetExts: ["png", "jpg", "jpeg", "gif"], // Add the necessary file extensions
  },
  transformer: {
    babelTransformerPath: require.resolve(
      "metro-react-native-babel-transformer"
    ),
  },
};
