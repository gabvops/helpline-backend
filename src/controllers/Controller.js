class Controller {
    constructor (entitieService) {
        this.entitieService = entitieService;
    }

    async getAll(req, res) {
        try {
            const listadeUsers = await this.entitieService.getAllRegistrys();
            return res.status(200).json(listadeUsers);
        } catch (erro) {

        }
    }
}

module.exports = Controller;