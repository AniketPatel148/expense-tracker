import React from "react";
import { Grid } from "@material-ui/core";

import SideCard from "./components/detailCards/Cards";
import CenterCard from "./components/centerCard/Card";
import useStyles from "./Style";

const App = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid
				className={classes.grid}
				container
				spacing={0}
				alignItems="center"
				justify="center"
				style={{ height: "100vh" }}
			>
				<Grid item xs={12} sm={4}>
					<SideCard title="Income" />
				</Grid>
				<Grid item xs={12} sm={3}>
					<CenterCard />
				</Grid>
				<Grid item xs={12} sm={4}>
					<SideCard title="Expense" />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
