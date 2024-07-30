const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UsersController extends Controller {
    constructor () {
        super(userServices);
    }
}

module.exports = UsersController;