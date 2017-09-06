var connection = require("connection.js")

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err,data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    },
    insertOne: function(burger, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [burger], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    updateOne: function(burger, cb) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE burger_name = ?;", [burger], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}

module.exports = orm