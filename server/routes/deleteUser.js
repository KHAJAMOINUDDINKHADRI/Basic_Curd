const router = require('express').Router();
const supabase = require('../dbConnect');

router.delete('/:id', async (req, res) => {
    const userId = req.params.id;

    const { data, error } = await supabase
        .from('user_info')
        .delete()
        .eq('id', userId);

    if (error) {
        res.json({ error: error.message });
    } else {
        res.json(data);
    }
});

module.exports = router;