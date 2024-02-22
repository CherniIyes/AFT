const db = require('../db');

class Cow {
  constructor({ id, cow_number, cow_race, artificial_insemination_date }) {
    this.id = id;
    this.cow_number = cow_number;
    this.cow_race = cow_race;
    this.artificial_insemination_date = artificial_insemination_date;
  }

  static async getAll() {
    try {
      const cows = await db.query('SELECT * FROM cows');
      return cows.map(cow => new Cow(cow));
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get cows');
    }
  }

  static async getById(id) {
    try {
      const [cow] = await db.query('SELECT * FROM cows WHERE id = ?', [id]);
      if (!cow) {
        throw new Error('Cow not found');
      }
      return new Cow(cow);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get cow');
    }
  }

  async save() {
    try {
      const result = await db.query('INSERT INTO cows (cow_number, cow_race, artificial_insemination_date) VALUES (?, ?, ?)', [this.cow_number, this.cow_race, this.artificial_insemination_date]);
      this.id = result.insertId;
      return this;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save cow');
    }
  }

  async update() {
    try {
      await db.query('UPDATE cows SET cow_number = ?, cow_race = ?, artificial_insemination_date = ? WHERE id = ?', [this.cow_number, this.cow_race, this.artificial_insemination_date, this.id]);
      return this;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update cow');
    }
  }

  async delete() {
    try {
      await db.query('DELETE FROM cows WHERE id = ?', [this.id]);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete cow');
    }
  }
}

module.exports = Cow;
