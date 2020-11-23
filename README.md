# react-native-android-alert-mjr

**this is a library of alert components.**
**you can use it by installing it on your native project.**

# Installation 
`npm i react-native-android-alert-mjr`

# Usage
   ####  Default Alert
```javascript
import Alert from 'react-native-android-alert-mjr';
 
render() {
        return (
            <View>
                <Alert
                    isVisible={"true"}
                    text={"Hello World"}
                />
            </View>
        );
    }
```

# props
| Name   | Type   |Default    |  Description  |
| ------------ | ------------ | ------------ | ------------ |
| isVisible  |bool    | REQUIRED   |  Show the Alert? |
| text  | string  |  REQUIRED | text in center Alert Component  |
|  closeText | string  | REQUIRED  |  text on close button |
|  onClose | func  | () => isVisible(bool)  |  close modal(!isVisible => close modal) |