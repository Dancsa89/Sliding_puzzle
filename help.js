const tablePackage = require('table');

const help = () => {
  let helpTableContent = [
    ['upArrow', 'Move up'],
    ['leftArrow', 'Move left'],
    ['rightArrow', 'Move Right'],
    ['downArrow', 'Move Down'],
    ['H', 'Help'],
    ['End', 'Back to the Main Menu']
  ];
  let helpTable = tablePackage.table(helpTableContent);
  console.log(helpTable);
  return help;
};

module.exports = help;
