const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length) + 1];

const adjectives = ["friendly"];
const nouns = ["humans"];
const verbs = ["welcome"];

// prettier-ignore
const getFriendlyId = () => `${getRandomItem(adjectives)}-${getRandomItem(nouns)}-${getRandomItem(verbs)}`;

module.exports = getFriendlyId;
