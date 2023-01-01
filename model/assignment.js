let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    auteur: String,
    rendu: Boolean,
    note:Number,
    remarque:String,  
    matiere:{
        type: String,
        enum: ['base de données','Big data','Developpement web','Prog avancé java','planification de projet'],
        default:'pending'
    },
    urlSubjectImage:String,
    urlTeacherImage:String
});

AssignmentSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignments', AssignmentSchema);
