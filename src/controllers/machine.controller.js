const machineService = require("../services/machine.service");

const create = async (req, res) => {
    try {
        const machine = await machineService.createMachine(req.body);

        return res.status(201).json({
            message: "Machine créée avec succès",
            machine
        });

    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: "Cette référence de machine existe déjà"
            });
        }

        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
};

module.exports = {
    create
};