"use strict";
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const utils = require(`../../utils`);

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const DEFAULT_COUNT = 1;

const FILE_NAME = `mocks.json`;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const getPictureFileName = (min) => {
  return min >= 10 ? `item${min}.jpg` : `item0${min}.jpg`;
};

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generateOffers = (count, titles, categories, sentences) =>
  Array(count)
    .fill({})
    .map(() => ({
      type: Object.keys(OfferType)[
        Math.floor(Math.random() * Object.keys(OfferType).length)
      ],
      title: titles[utils.getRandomInt(0, titles.length - 1)],
      description: utils.shuffle(sentences).slice(1, 5).join(` `),
      sum: utils.getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
      picture: getPictureFileName(
        utils.getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)
      ),
      category: [categories[utils.getRandomInt(0, categories.length - 1)]],
    }));

module.exports = {
  name: `--generate`,
  async run(count) {
    // Считываем контент из файлов
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    
    const content = JSON.stringify(
      generateOffers(countOffer, titles, categories, sentences),
      null,
      4
    );

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (e) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  },
};
