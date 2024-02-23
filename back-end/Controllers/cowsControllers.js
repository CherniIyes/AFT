const db = require('../db'); // Import your database connection

// Get all cows
exports.getAllCows = async (req, res) => {
  try {
    const cows = await db.query('SELECT * FROM cows');
    res.json(cows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new cow
exports.createCow = async (req, res) => {
  const { cow_number, cow_race, artificial_insemination_date } = req.body;
  try {
    const result = await db.query('INSERT INTO cows (cow_number, cow_race, artificial_insemination_date) VALUES (?, ?, ?)', [cow_number, cow_race, artificial_insemination_date]);
    res.status(201).json({ message: 'Cow created successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get cow by ID
exports.getCowById = async (req, res) => {
  const { id } = req.params;
  try {
    const [cow] = await db.query('SELECT * FROM cows WHERE id = ?', [id]);
    if (!cow) {
      return res.status(404).json({ error: 'Cow not found' });
    }
    res.json(cow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update cow
exports.updateCow = async (req, res) => {
  const { id } = req.params;
  const { cow_number, cow_race, artificial_insemination_date } = req.body;
  try {
    await db.query('UPDATE cows SET cow_number = ?, cow_race = ?, artificial_insemination_date = ? WHERE id = ?', [cow_number, cow_race, artificial_insemination_date, id]);
    res.json({ message: 'Cow updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete cow
exports.deleteCow = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM cows WHERE id = ?', [id]);
    res.json({ message: 'Cow deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
