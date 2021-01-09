import React from "react";
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	ListItemSecondaryAction,
	IconButton,
} from "@material-ui/core";

import useStyles from "./Style";

import { Delete, MoneyOff } from "@material-ui/icons";

const CList = () => {
	const classes = useStyles();

	const transactions = [
		{ id: 1, type: "Income", category: "Salary", amount: 50, date: new Date() },
	];

	return (
		<List dense={false} className={classes.list}>
			{transactions.map((transaction) => (
				<Slide
					direction="down"
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									transaction.type === "Income"
										? classes.avatarIncome
										: classes.avatarExpense
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.category}
							secondary={`$${transaction.amount} - ${transaction.date}`}
						/>
					</ListItem>
				</Slide>
			))}
		</List>
	);
};

export default CList;
