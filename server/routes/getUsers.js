const router = require('express').Router();
const supabase = require('../dbConnect');

router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('user_info')
        .select('*');

    if (error) {
        res.json({ error: error.message });
    }
    else {
        res.json(data);
    }
});


module.exports = router;