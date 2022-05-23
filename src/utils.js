/* eslint-disable import/prefer-default-export */
const generateRandom = (min, max) => min + Math.floor(Math.random() * (max - min));

export { generateRandom };
