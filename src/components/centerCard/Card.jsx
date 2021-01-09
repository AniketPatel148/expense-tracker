import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
	Divider,
} from "@material-ui/core";

import useStyles from "./Style";

const CenterCard = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader
				title="Expense Tracker"
				subheader="Developed with 💖 by Aniket"
			/>
			<CardContent>
				<Typography align="center" variant="h5">
					Total Balance $100
				</Typography>

				<Typography
					variant="subtitle1"
					style={{ lineHeight: "1.5em", marginTop: "20px" }}
				>
					Try doing something Shit!!
				</Typography>
				<Divider />
			</CardContent>
			<CardContent className={classes.cartContent}>
				<Grid container spacing={2}>
					<Grid item xs={12}></Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default CenterCard;
