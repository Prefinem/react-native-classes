import { ProgressBarAndroid as RNProgressBarAndroid } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ProgressBarAndroid = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNProgressBarAndroid style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNProgressBarAndroid>
		)}
	</ThemeContext.Consumer>
);

ProgressBarAndroid.contextType = ThemeContext;

export default ProgressBarAndroid;
