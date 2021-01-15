const path = require('path');
let db = require('../database/models');

module.exports = {
    index: function(req,res) {
        db.Nota.findAll({
            where: {
                status: 1
            }
        })
        .then(function(notas){
            res.render('index', {notas: notas});
        });
    },
    create: function(req,res) {
        db.Nota.create({
            title: req.body.title,
            text: req.body.text,
            status: 1
        })
        .then(function() {
            res.redirect('/');
        });
    },
    edit: function(req,res) {
        res.render('detail');
    }
}