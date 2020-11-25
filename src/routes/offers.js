"use strict";

const {Router} = require(`express`);
const router = new Router();

router.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/${req.params.id}`));
router.get(`/category/:id`, (req, res) => res.send(`/offers/category/${req.params.id}`));
router.get(`/add`, (req, res) => res.send(`/offers/add`));

module.exports = router;
