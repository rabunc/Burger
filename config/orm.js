var connection = require("./connection.js");
// ./ says this is a file on my computer, NOT an npm module

var orm = {
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function(err,data) {
            if (err) {
                throw err;
            }
            cb(data)
        })
    },
    insertOne: function(table, nameCol, burger, cb) {
        // nameCol is burger_name
        connection.query(`INSERT INTO ${table} (${nameCol}) VALUES (?);`, burger, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    updateOne: function(table, burger_id, cb) {
        console.log(burger_id)
        connection.query(`UPDATE ${table} SET devoured = 1 WHERE id = ?;`, burger_id, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}

module.exports = orm;