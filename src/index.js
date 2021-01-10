import React from "react";
import ReactDOM from "react-dom";

import App from "./app.js";
import { StateProvider } from "./store/Store";
import reducer, { initialState } from "./store/Reducer";

import "./index.css";

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<App />
	</StateProvider>,
	document.getElementById("root")
);
