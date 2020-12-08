"use strict";

const express = require(`express`);
const DEFAULT_PORT = 8080;

const searchRoutes = require(`../routes/search`);
const loginRoutes = require(`../routes/login`);
const offersRoutes = require(`../routes/offers`);
const myRoutes = require(`../routes/my`);
const registerRoutes = require(`../routes/register`);

const app = express();

app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/my`, myRoutes);
app.use(`/search`, searchRoutes);
app.use(`/offers`, offersRoutes);

app.listen(DEFAULT_PORT, () =>
  console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`)
);
