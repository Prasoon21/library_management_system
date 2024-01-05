const Sequelize = require('sequelize');
const Library = require('../models/libSequelize');

exports.getBook = async(req, res, next) => {
    try{
        const data = await Library.findAll();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(" Get book is failing", JSON.stringify(error));
        res.status(500).json({error: error})
    }
};

exports.addBook = async (req, res, next) => {
    console.log("Received POST request for adding book:", req.body);
    if(!req.body.bookName){
        console.log('missing req fields');
        return res.sendStatus(500)
    }

    try{
        const bookName = req.body;

        console.log(bookName);

        const data = await Library.create({
            bookName: bookName
        });

        console.log('updated success');

        res.status(201).json(data)
    } catch (error) {
        console.log(error, JSON.stringify(error))

        res.status(501).json({error})
    }
}