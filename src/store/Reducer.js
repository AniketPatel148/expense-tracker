export const initialState = {
	transactions: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			const newDeleteTransactions = state.transactions.filter(
				(item) => item.id !== action.id
			);
			return {
				...state,
				transactions: newDeleteTransactions,
			};
		case "ADD_TRANSACTION":
			const newAddTransactions = [action.transaction, ...state.transactions];
			return {
				...state,
				transactions: newAddTransactions,
			};
		default:
			return state;
	}
};

export default reducer;
