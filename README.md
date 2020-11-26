# react-native-android-alert-mjr

**this is a library of alert components.**
**you can use it by installing it on your React-Native project.**

# Installation 
1. `npm i react-native-android-alert-mjr` 

2. `npm i react-native-responsive-screen`

3.`npm i react-native-modal`

install carefully above package on your react-native project and use,it easily , and simple :tw-1f385:

# Usage
   ####  Default Alert
```javascript
import Alert from 'react-native-android-alert-mjr';
 
render() {
        return (
            <View>
                <Alert
                    isVisible={this.state.visiblealert}
                    text={this.state.Alert}
                    closeText={"close"}
                    onClose={() => {
                        this.setState({ visiblealert: false })
                    }}
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