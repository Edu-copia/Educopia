import React from "react";
import ReactDOM from "react-dom";
import store from './app/store';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<div>
			<h1>Hello, Educopia! Test!</h1>
			<p>Another Test</p>
		</div>
	);
};

ReactDOM.render(
<Provider store={store}>
	<App />	
</Provider>
, 
document.getElementById("root"));
