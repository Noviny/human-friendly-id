const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length) + 1];

const adjectives = ["friendly", "kind", "cute", "adorbs"];
const nouns = ["humans", "butterflies", "packages", "friends"];
const verbs = [
  "welcome",
  "do-crime",
  "are-beautiful",
  "love",
  "have-all-the-friends"
];

// prettier-ignore
const getFriendlyId = () => `${getRandomItem(adjectives)}-${getRandomItem(nouns)}-${getRandomItem(verbs)}`;

module.exports = getFriendlyId;
