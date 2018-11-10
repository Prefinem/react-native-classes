import ThemeProvider, { Text } from './../src';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold',
	},
});

export default class App extends React.Component {
	render() {
		return (
			<ThemeProvider styles={styles}>
				<Text clasName="bold">Open up App.js to start working on your app!</Text>
			</ThemeProvider>
		);
	}
}
