"use strict";

const {Router} = require(`express`);
const router = new Router();

router.get(`/comments`, (req, res) => res.send(`/my/comments`));
router.get(`/`, (req, res) => res.send(`/my`));

module.exports = router;
