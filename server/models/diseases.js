/*
	mongoDB Schema for diseases
*/
const {Schema,model} = require ('mongoose');
var DiseaseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true 
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});
module.exports = DiseaseSchema;
/*
 	Default diseases in the system
		-> those will be added as soon as the system is live
		-> if they are deleted from the system, and the system restarts, then they will be added again in the system
*/
// var scoreOfDisease = {}; // empty map
// module.exports = {scoreOfDisease, Disease};