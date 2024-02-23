const db = require('../database/index');

class Cow {
  constructor({ id, cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date }) {
    this.id = id;
    this.cow_number = cow_number;
    this.cow_race = cow_race;
    this.artificial_insemination_date = artificial_insemination_date;
    this.artificial_insemination_triggered = artificial_insemination_triggered;
    this.return_in_heat_control_date = return_in_heat_control_date;
    this.pregnancy_detection_date = pregnancy_detection_date;
    this.drying_off_date = drying_off_date;
    this.calving_and_delivery_date = calving_and_delivery_date;
  }

  static getAll(callback) {
    db.query('SELECT * FROM cows', (err, results) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      const cows = results.map(cow => new Cow(cow));
      callback(null, cows);
    });
  }

  static getById(id, callback) {
    db.query('SELECT * FROM cows WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const cow = new Cow(results[0]);
      callback(null, cow);
    });
  }

  save(callback) {
    db.query('INSERT INTO cows (cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [this.cow_number, this.cow_race, this.artificial_insemination_date, this.artificial_insemination_triggered, this.return_in_heat_control_date, this.pregnancy_detection_date, this.drying_off_date, this.calving_and_delivery_date], (err, result) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      this.id = result.insertId;
      callback(null, this);
    });
  }

  update(callback) {
    db.query('UPDATE cows SET cow_number = ?, cow_race = ?, artificial_insemination_date = ?, artificial_insemination_triggered = ?, return_in_heat_control_date = ?, pregnancy_detection_date = ?, drying_off_date = ?, calving_and_delivery_date = ? WHERE id = ?', [this.cow_number, this.cow_race, this.artificial_insemination_date, this.artificial_insemination_triggered, this.return_in_heat_control_date, this.pregnancy_detection_date, this.drying_off_date, this.calving_and_delivery_date, this.id], (err) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      callback(null);
    });
  }

  delete(callback) {
    db.query('DELETE FROM cows WHERE id = ?', [this.id], (err) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      callback(null);
    });
  }
}

module.exports = Cow;
