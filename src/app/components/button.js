//button component for the application 
var React = require('react-native');
var {
	View, 
	StyleSheet, 
	Text, 
	TouchableHighlight, 
} = React;

module.exports = React.createClass({
	//onPress function that triggers when button pressed
	//this.props.text is property that can be dynamically filled within button 
	render: function() {
		return (
			<TouchableHighlight 
				underlayColor={'grey'}
				onPress={this.props.onPress}
				style={styles.button} >
				<Text style={styles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
});

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center', 
		alignItems: 'center',
		borderWidth: 1, 
		borderRadius: 5, 
		padding: 5, 
		borderColor: 'black', 
		marginTop: 10, //keeps components from touching 
	}, 
	buttonText: {
		fontSize: 20,
		flex: 1, 
		alignSelf: 'center', 
	}
});