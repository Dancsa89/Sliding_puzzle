const tablePackage = require('table');

const help = () => {
  let helpTableContent = [
    ['Arrow up', 'Move up'],
    ['Arrow left', 'Move left'],
    ['Arrow right', 'Move Right'],
    ['Arrow down', 'Move Down'],
    ['H', 'Help'],
    ['X', 'Exit']
  ];
  let helpTable = tablePackage.table(helpTableContent);
  console.log(helpTable);
  return help;
};

module.exports = help;
