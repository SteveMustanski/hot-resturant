const tableData = require('../data/table-data');
const waitingListData = require('../data/waitinglist-data');

module.exports = (app) => {

  app.get('/api/tables', function(req, res) {
    res.json(tableData);
  });
  app.get('/api/waiting', function(req, res) {
    res.json(waitingListData);
  });

  app.post('/api/tables', function (req, res) {
    if(tableData.length <5) {
      tableData.push(req.body);
      res.json(true)
    } else {
      waitingListData.push(req.body);
      res.json(false);
    }
  })

}