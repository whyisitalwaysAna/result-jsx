import { useState } from 'react';
import { initialState } from '../constants';

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
	};
};
