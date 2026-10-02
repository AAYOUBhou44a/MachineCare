const userService = require("../services/auth.service");
const { findUserByEmail , checkPassword, generateToken} = require("../services/auth.service");

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

         if(error.code === 11000){
            return res.status(409).json({
                messge:"Cet email est déja utilisé"
            })
        }

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
                message: "Email ou mot de passe incorrect email"
            });
        }

        const validPassword = await checkPassword(user, password);

        if(!validPassword){
            return res.status(401).json({
                message: "Email ou mot de passe incorrect password"
            });
        }

        // 401 pour les identifiant incorrect
        // pour une page ou une resource qui n'existe pas 

        const token = generateToken(user);

        return res.status(200).json({
            message: "Vous etez connecté",
            token
            //on envoie le token au navigateur du client
        })


    }catch(error){
        console.error(error);

        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
}

const getProfile = async (req, res) => {
    try {
        const user = await userService.findUserByEmail(req.user.email);

        if (!user) {
            return res.status(404).json({
                message: "Utilisateur non trouvé"
            });
        }

        return res.status(200).json({
            user
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erreur de serveur"
        });
    }
};

module.exports = {
    login,
    register,
    getProfile
}