const model = require("../Models/SellsModels");

module.exports = {
    DELETE: (req, res) => {
        model.remove(req.params.id, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      getAllsells: (req, res) => {
        model.getAll((err, sells) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(sells);
          }
        });
      },
      addOnesells: (req, res) => {
        const sells = req.body;
        model.addOne(sells, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      updatesells: (req, res) => {
        const id = req.params.id;
        const updatedsells = req.body;
        model.update(id, updatedsells, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(results);
          }
        });
      },
      getById: (req, res) => {
        const sellsid = req.params.id;
        model.getOne(sellsid, (err, result) => {
          if (err) {
            res.status(500).send(err);
          }  else {
              res.status(200).json(result);
            }
          })
      }

}