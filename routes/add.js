var data = require("../data.json");

exports.addFriend = function(req, res) {
    var name = req.query.name;
    var description = req.query.description;
    
    var result = "";
    if (name == undefined || name == "") {
        result += "Name was not specified. "
    }
    
    if (description == undefined || description == "") {
        result += "Description was not specified. "
    }
    
    if (result === "") {
        result = "Success!"
        data["friends"].push({"name": name,
			"description":description,
			"imageURL":"http://lorempixel.com/250/250/people"});
    }
    
    res.render('add', {"result":result});
}