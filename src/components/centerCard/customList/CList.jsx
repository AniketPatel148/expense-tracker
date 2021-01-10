import React from "react";
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	ListItemSecondaryAction,
	IconButton,
	Slide,
} from "@material-ui/core";

import useStyles from "./Style";

import { Delete, MoneyOff } from "@material-ui/icons";

const CList = () => {
	const classes = useStyles();

	const transactions = [
		{
			id: 1,
			type: "Income",
			category: "Salary",
			amount: 50,
			date: "16 Thu 2020",
		},
		{
			id: 1,
			type: "Expense",
			category: "Movies",
			amount: 150,
			date: "17 fri 2020",
		},
		{
			id: 1,
			type: "Income",
			category: "Salary",
			amount: 550,
			date: "18 Sat 2020",
		},
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
						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete" onClick="">
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</List>
	);
};

export default CList;
