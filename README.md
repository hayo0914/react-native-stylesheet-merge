# react-native-styleseet-merge
## Installation
```
yarn add react-native-stylesheet-merge
```

## Usage
```js
import { StyleSheet } from 'react-native-styleseet-merge';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    ios: {
      flexDirection: 'column',
      justifyContent: 'center',
    }
    android: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
  },
});
```

On iOS platform, above code is equivalent to that below.
```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
```

Likewise on Android platform that would be like this.
```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
```

## createObject Function
Utility function to get a merged object according to the current platform(ios/android)

```js
import { createObject } from 'react-native';

console.log(createObject({
  company: null,
  ios: {
    company: 'apple'
  },
  anrdoid: {
    company: 'google'
  },
}));

// ios output: { company: 'apple' }
// android output: { company: 'google' }
```

## License
MIT License.

