var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    create: function(burger, cb) {
        orm.insertOne("burgers", "burger_name", burger, function(res){
            cb(res)
        })
    },
    update: function(burger, cb) {
        orm.updateOne("burgers", burger, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;