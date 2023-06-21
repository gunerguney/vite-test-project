import Axios from '../plugins/axios';

export const getSystemInit = () => {
	return Axios.get('/settings/systemInit')
};