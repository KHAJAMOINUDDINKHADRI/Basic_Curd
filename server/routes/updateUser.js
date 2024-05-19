const router = require('express').Router();
const supabase = require('../dbConnect');

router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const { Name, Email, Phone_Number, Date_of_Birth } = req.body;
    const updateUser = { Name, Email, Phone_Number, Date_of_Birth };

    const { data, error } = await supabase
        .from('user_info')
        .update([updateUser])
        .eq('id', userId);

    if (error) {
        res.json({ error: error.message });
    } else {
        res.json(data);
    }
});

module.exports = router;