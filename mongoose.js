const mongoose = require("mongoose");
const conn_str ="mongodb://payal:payal_pass@cluster0-shard-00-00.or00j.mongodb.net:27017,cluster0-shard-00-01.or00j.mongodb.net:27017,cluster0-shard-00-02.or00j.mongodb.net:27017/tcet_esd?ssl=true&replicaSet=atlas-ax8to4-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(conn_str, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> console.log("Connected Successfully...") )
    .catch( (error)=> console.log(error));

const userSchema = new mongoose.Schema({
	name: {"type": String, "required": true},
	age: Number,
	city: String,
	house_no: Number,
	no_of_rooms: Number,
	duration_in_months: Number,
	rent: Number
});

// Create collection table object mapping
const userObject = new mongoose.model("house_rental", userSchema);

exports.User = userObject;