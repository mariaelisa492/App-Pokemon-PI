const { Router } = require('express');
const axios = require('axios');
const {Pokemon, Type} = require ('../db');
const {getAllPoke, getPokeByName, getPokeById} = require ('../controllers/pokemonController');

const router = Router();


//ruta a pokemons  y pokemons/?name
router.get('/', async (req, res) => {
    try {
        const {name} = req.query;
        if(!name) { 
            return res.status(200).send(await getAllPoke());
        }else{
            const pokeFoundName = await getPokeByName(name);
            //console.log('pokeFound',pokeFoundName);
            if(pokeFoundName) return res.status(200).json(pokeFoundName)
        }
    } catch (error) {
        console.log('entro error');
        return res.status(404).send('Pokemon not found');
    }
});



router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const pokeFoundId = await getPokeById(id);
        //console.log('pokeFound',pokeFoundId);
        if(pokeFoundId) return res.status(200).json(pokeFoundId)

    } catch (error) {
        console.log('entro error');
        return res.status(404).send('Pokemon not found');
    }
});



router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

module.exports = router;