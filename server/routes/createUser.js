const router = require('express').Router();
const supabase = require('../dbConnect');

router.post('/', async (req, res) => {
    const { Name, Email, Phone_Number, Date_of_Birth } = req.body;
    const newUser = { Name, Email, Phone_Number, Date_of_Birth };

    const { data, error } = await supabase
        .from('user_info')
        .insert([newUser]);

    if (error) {
        res.json({ error: error.message });
    }
    else {
        res.json(data);
    }
});


module.exports = router;