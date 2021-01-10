import React, { useState } from "react";
import {
	TextField,
	FormControl,
	Typography,
	Button,
	Grid,
	InputLabel,
	Select,
	MenuItem,
} from "@material-ui/core";
import { v4 as uuid4 } from "uuid";

import useStyles from "./Style";
import { useStateValue } from "../../../store/Store";
import {
	incomeCategories,
	expenseCategories,
} from "../../../constants/Constants";

const initialState = {
	type: "Income",
	amount: "",
	category: "",
	date: new Date(),
};

const Form = () => {
	const classes = useStyles();
	const [, dispatch] = useStateValue();

	const [formData, setFormData] = useState(initialState);

	const createTransaction = () => {
		const _transaction = {
			...formData,
			amount: Number(formData.amount),
			id: uuid4(),
		};
		dispatch({
			type: "ADD_TRANSACTION",
			transaction: _transaction,
		});

		setFormData(initialState);
	};

	const currentCategory =
		formData.type === "Income" ? incomeCategories : expenseCategories;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography align="center" variant="subtitle2" gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						{currentCategory.map((cat) => (
							<MenuItem value={cat.type} key={cat.type}>
								{cat.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					label="amount"
					fullWidth
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="date"
					label="Date"
					fullWidth
					value={formData.date}
					onChange={(e) => setFormData({ ...formData, date: e.target.value })}
				/>
			</Grid>
			<Button
				className={classes.button}
				variant="outlined"
				color="primary"
				fullWidth
				onClick={createTransaction}
			>
				Create
			</Button>
		</Grid>
	);
};

export default Form;
