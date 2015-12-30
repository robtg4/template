//login screen (first screen shown to user)
var React = require('react-native');
var {
	View, 
	StyleSheet, 
	Text, 
	TextInput,
} = React;
var Button = require('../components/button');

module.exports = React.createClass({
	//textinput by default doesn't come with any styling
	getInitialState: function() {
		return {
			username: '', 
			password: '', 
			errorMessage: '',
		};
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Text> Sign In</Text>
				<Text style={styles.label}> Username: </Text>
				<TextInput 
					style={styles.input} 
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})} />
				<Text style={styles.label}> Password: </Text>
				<TextInput 
					secureTextEntry={true} 
					style={styles.input} 
					value={this.state.password}
					onChangeText={(text) => this.setState({password: text})} />

				<Text style={styles.label} > {this.state.errorMessage} </Text>

				<Button text={'Sign In'} onPress={this.onPress} />

			</View>
		);
	}, 
	onPress: function() {
		//log the user on, get eror if login information doesn't exist 
		//we need to show the user that the error occured
		this.props.navigator.immediatelyResetRouteStack([{ name: 'home'}]); 
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center',
	}, 
	input: {
		padding: 4, //gives us offset to border 
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1, 
		borderRadius: 5, //round input box
		margin: 5, 
		width: 200, 
		alignSelf: 'center', //center yourself on form when you have fixed widths 
	}, 
	label: {
		fontSize: 18, 
	}
});
