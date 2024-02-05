const getString = (value) => {
  switch (typeof value) {
    case 'object':
      return value == null ? value : '[complex value]';
    case 'string':
      return `'${value}'`;
    default:
      return value;
  }
};

const data = {
  added: 'was added with value:',
  deleted: 'was removed',
  changed: 'was updated. From',
};

const getPlain = (tree) => {
  const iter = (object, path) => {
    const result = object.map((key) => {
      const fullKey = `${path}${key.key}`;
      switch (key.action) {
        case 'deleted':
          return `Property '${fullKey}' ${data.deleted}`;
	case 'added':
          return `Property '${fullKey}' ${data.added} ${getString(key.newValue)}`;
	case 'nested':
          return iter(key.children, `Property '${fullKey}.'`);
	case 'changed':
          return `Property '${fullKey}' ${data.changed} ${getString(key.oldValue)} to ${getString(key.newValue)}`;
	default:
          return null;
      }
    });
    return result.filter((item) => item != null).join('\n');
  };
  return iter(tree, '');
};

export default getPlain;
