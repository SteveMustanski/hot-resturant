const tableData = require('../data/table-data');
const waitingListData = require('../data/waitinglist-data');

module.exports = (app) => {

  app.get('/api/tables', function(req, res) {
    res.json(tableData);
  });
  app.get('/api/waiting', function(req, res) {
    res.json(waitingListData);
  });

}