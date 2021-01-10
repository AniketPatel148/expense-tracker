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
import { useStateValue } from "../../../store/Store";

const CList = () => {
	const classes = useStyles();

	const [{ transactions }, dispatch] = useStateValue();

	const deleteTransaction = (_id) => {
		dispatch({
			type: "DELETE_TRANSACTION",
			id: _id,
		});
	};

	console.log(transactions);

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
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => deleteTransaction(transaction.id)}
							>
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
