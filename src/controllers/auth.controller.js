const userService = require("../services/auth.service");
const { findUserByEmail } = require("../services/auth.service");

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
        console.error(error);
        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
}

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await findUserByEmail(email);
        if(!user){
            return res.status(401).json({
                message: "Email ou mot de passe incorrect"
            });
        }

        const validPassword = await checkPassword(user, password);

        if(!validPassword){
            return res.status(401).json({
                message: "Email ou mot de passe incorrect"
            });
        }

        // 401 pour les identifiant incorrect
        // pour une page ou une resource qui n'existe pas 


    }catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
}

module.exports = {
    login,
    register
}