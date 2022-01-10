// user.service.js (Data service)

import api from '../apis/api';
import authHeader from './auth-header';

class UserService {

    getUser() {
        return api.get('/users/me', { headers: authHeader() });
    }
}

export default new UserService();