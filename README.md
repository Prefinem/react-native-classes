<h1 align="center">
	<br>
	<a href="https://github.com/Prefinem/react-native-classes"><img src="https://raw.githubusercontent.com/Prefinem/react-native-classes/master/docs/logo.png" alt="react-native-classes" width="200"></a>
	<br>
<!--
https://prefinem.com/simple-icon-generator/#eyJiYWNrZ3JvdW5kQ29sb3IiOiIjMDBhNGQzIiwiYm9yZGVyQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyV2lkdGgiOiIwIiwiZXhwb3J0U2l6ZSI6NTEyLCJleHBvcnRpbmciOnRydWUsImZvbnRGYW1pbHkiOiJQZXJtYW5lbnQgTWFya2VyIiwiZm9udFBvc2l0aW9uIjoiNjAiLCJmb250U2l6ZSI6IjM0IiwiZm9udFdlaWdodCI6IjMwMCIsImltYWdlIjoiIiwiaW1hZ2VNYXNrIjoiIiwiaW1hZ2VTaXplIjo1MCwic2hhcGUiOiJzcXVhcmUiLCJ0ZXh0IjoiUiBOIENcbiJ9
-->
</h1>

<!-- NPM -->

[![Version](https://flat.badgen.net/npm/v/react-native-classes)](https://npmjs.org/package/react-native-classes)
[![Weekly Downloads](https://flat.badgen.net/npm/dw/react-native-classes)](https://npmjs.org/package/react-native-classes)
[![License](https://flat.badgen.net/npm/license/react-native-classes)](https://npmjs.org/package/react-native-classes)

<!-- GitHub -->

[![Open Issues](https://flat.badgen.net/github/open-issues/Prefinem/react-native-classes)](https://github.com/Prefinem/react-native-classes)
[![Stars](https://flat.badgen.net/github/stars/Prefinem/react-native-classes)](https://github.com/Prefinem/react-native-classes)
[![Open PRs](https://flat.badgen.net/github/open-prs/Prefinem/react-native-classes)](https://github.com/Prefinem/react-native-classes)

<!-- Dependencies -->

[![Dependencies](https://flat.badgen.net/david/dep/Prefinem/react-native-classes)](https://david-dm.org/Prefinem/react-native-classes)
[![DevDependencies](https://flat.badgen.net/david/dev/Prefinem/react-native-classes)](https://david-dm.org/Prefinem/react-native-classes?type=dev)
[![PeerDependencies](https://flat.badgen.net/david/peer/Prefinem/react-native-classes)](https://david-dm.org/Prefinem/react-native-classes?type=peer)

<!-- PackagePhobia -->

[![Install Size](https://flat.badgen.net/packagephobia/install/react-native-classes)](https://packagephobia.now.sh/result?p=react-native-classes)
[![Publish Size](https://flat.badgen.net/packagephobia/publish/react-native-classes)](https://packagephobia.now.sh/result?p=react-native-classes)

Bringing CSS Like Classes to React Native.

## Getting Started

```js
import ThemeProvider, { Text, View } from 'react-native-classes';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	heading: {
		color: '#333',
		fontSize: 20,
	},
	main: {
		backgroundColor: '#EFEFEF',
		marginVertical: 30,
		padding: 10,
	},
	screen: {
		marginTop: 35,
	},
	'text-bold': {
		fontWeight: 'bold',
	},
});

export default class App extends React.Component {
	render() {
		return (
			<ThemeProvider styles={styles}>
				<View className="screen">
					<Text className="text-bold">Open up App.js to start working on your app!</Text>
					<View className="main">
						<Text className="heading">Hello World!</Text>
					</View>
				</View>
			</ThemeProvider>
		);
	}
}
```
