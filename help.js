const tablePackage = require('table');

const help = () => {
  let helpTableContent = [
    ['upArrow', 'Move up'],
    ['leftArrow', 'Move left'],
    ['rightArrow', 'Move Right'],
    ['downArrow', 'Move Down'],
    ['H', 'Help'],
    ['X', 'Exit']
  ];
  let helpTable = tablePackage.table(helpTableContent);
  console.log(helpTable);
  return help;
};

module.exports = help;
