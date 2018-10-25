const tablePackage = require('table');

const help = () => {
    let helpTableContent = [
        ['W', 'Move up'],
        ['A', 'Move left'],
        ['S', 'Move Right'],
        ['D', 'Move Down'],
        ['H', 'Help'],
        ['End', 'Back to the Main Menu']
    ];
    let helpTable = tablePackage.table(helpTableContent);
    console.log(helpTable);
    return;
};

module.exports = help;
