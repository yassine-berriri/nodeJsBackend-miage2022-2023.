let userModel = require('../model/user');


// Récupérer tous les assignments (GET)
// Récupérer un assignment par son id (GET)
function getUser(req, res){
    let emailUser = req.body.email;
    let passwordUser = req.body.password;
    let userIsAdmin = req.body.isAdmin;
    console.log("{emailUser}",emailUser);
    userModel.findOne({email:emailUser,password:passwordUser,isAdmin:userIsAdmin}, (err, user) =>{
        if(err){res.send(err)}
        console.log("user",user);
        res.json(user);
    })
}

function getUsers(req, res){
    userModel.find((err, users) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(users);
        }
     
    });
}



module.exports = {getUser,getUsers};
