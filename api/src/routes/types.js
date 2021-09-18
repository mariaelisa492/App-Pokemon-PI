const { Router } = require('express');
const {getTypesTotal} = require ('../controllers/typeController');

const router = Router();

router.get('/', async (req, res) => {
    try{
        return res.status(200).send(await getTypesTotal());
    }catch(error){
        return res.status(400).send('No se encontraron tipos')
    }
});


module.exports = router;