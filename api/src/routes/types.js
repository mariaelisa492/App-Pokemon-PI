const { Router } = require('express');
const axios = require('axios');
const {Type} = require ('../db');
// const {typeController} = require ('../controllers/typeController');
const { URL_API_POKEMON_TYPE } = require('../utils/GlobalConst');
const {getTypes} = require ('../controllers/typeController')

const router = Router();

router.get('/', async (req, res, next) => {
    try{
        const existe = await Type.findAll({
            attributes: ['name']
        });
        console.log(existe)
        if(existe.length === 0){
            let response = await axios.get(URL_API_POKEMON_TYPE);
            response = response.data.results.map(type => Type.create({name: type.name}));
            response = await axios.all(response);
            console.log("Se crearon los types");
            return res.status(200).send(getTypes(response));
        }else{
            console.log("Se trajeron de la db los types");
            return res.status(200).send(getTypes(existe));
        }
    }catch(error){
        next(error);
    }
});


module.exports = router;