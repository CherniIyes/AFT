const db = require('../database/index');
const Cow = require('../Models/cowsModels');





exports.getCowById = (req, res) => {
 
  db.query('SELECT * FROM cows WHERE userId = ?', req.params.id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });





};











exports.getAllCows = (req, res) => {
  db.query('SELECT * FROM cows', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(results);
  });
};

exports.createCow = (req, res) => {
  const { cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date, userId } = req.body;

  if (!cow_number || !cow_race || !artificial_insemination_date || !artificial_insemination_triggered || !return_in_heat_control_date || !pregnancy_detection_date || !drying_off_date || !calving_and_delivery_date || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const values = [cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date, userId];

  db.query('INSERT INTO cows (cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'Cow created successfully', id: result.insertId });
  });
};


exports.updateCow = (req, res) => {
  const { id } = req.params;
  const { cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date } = req.body;
  db.query('UPDATE cows SET cow_number = ?, cow_race = ?, artificial_insemination_date = ?, artificial_insemination_triggered = ?, return_in_heat_control_date = ?, pregnancy_detection_date = ?, drying_off_date = ?, calving_and_delivery_date = ? WHERE id = ?', [cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date, id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Cow updated successfully' });
  });
};

exports.deleteCow = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM cows WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Cow deleted successfully' });
  });
};
