const model = require("../Models/SalesModels");

module.exports = {
      getAll: (req, res) => {
            model.getAll((err, results) => {
                  if (err) {
                        res.status(200).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      getOne: (req, res) => {
            model.getOne(req.params.id, (err, results) => {
                  if (err) {
                        res.status(200).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      Add: (req, res) => {
            model.Add(req.body, (err, results) => {
                  if (err) {
                        res.status(200).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      Update: (req, res) => {
            const id = req.params.id;
            const newData = req.body;

            model.Update(newData, id, (err, results) => {
                  if (err) {
                        res.status(200).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      DELETE: (req, res) => {
            model.DELETE(req.params.id, (err, results) => {
                  if (err) {
                        res.status(200).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
};