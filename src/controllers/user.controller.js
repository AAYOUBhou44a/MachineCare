const userService = require("../services/user.service");

const register = async (req, res)=>{
    try{
        const {firstName, lastName, email, password} = req.body;

        const user = await userService.createUser({firstName, lastName, email, password});

        if(!user){
            return res.status(500).json({
                message: "Erreur lors de la création de l'utilisateur"
            })
        }

        return res.status(201).json({
            message: "Utilisateur créé avec succès"
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
}

module.exports = {
    register
}