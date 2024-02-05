import getStylish from './stylish.js';
import getPlain from './plain.js';

const makeFormat = (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return getStylish(tree);
    case 'plain':
      return getPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`${formatName} format is not correct`);
  }
}
export default makeFormat;
