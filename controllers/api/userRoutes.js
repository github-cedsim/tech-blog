const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json({ message: 'Signup successful', newUser });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;