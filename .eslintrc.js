{
    "extends": "airbnb",
        "parser": "babel-eslint",
            "plugins": ["react-native"],
                "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ios.js", ".android.js"]
            }
        },
        "import/core-modules": [
            "EventEmitter",
            "NativeError",
            "react-native-cropper",
            "react-native-bridge-firebase"
        ]
    },
    "rules": {
        "no-console": 0,
            "react-native/no-unused-styles": 2,
                "react-native/split-platform-components": 2,
                    "react-native/no-inline-styles": 2,
                        "react-native/no-color-literals": 2,
  },
    "globals": {
        "__DEV__": true,
            "jest": true,
                "describe": true,
                    "it": true,
                        "expect": true,
  }
}