const express = require('express')
const path = require('path')
const fileController = require(path.resolve(__dirname,'../fileController'))
const Router = express.Router();

Router.get('/:id', (req, res) => {

    

})


module.exports = Router;