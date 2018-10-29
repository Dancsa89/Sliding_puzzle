const tablePackage = require('table');

const help = () => {
  let helpTableContent = [
    ['Arrow Up', 'Move Up'],
    ['Arrow Left', 'Move Left'],
    ['Arrow Right', 'Move Right'],
    ['Arrow Down', 'Move Down'],
    ['H', 'Help'],
    ['X', 'Exit']
  ];
  let helpTable = tablePackage.table(helpTableContent);
  console.log(helpTable);
  return help;
};

module.exports = help;
