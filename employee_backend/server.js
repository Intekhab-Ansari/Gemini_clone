const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'intekhab',  // your MySQL password
  database: 'employee'
});

app.post('/submit-employee', (req, res) => {
  const { name, experience, profession, joining_date, salary } = req.body;

  const sql = 'INSERT INTO employee_info (name, experience, profession, date, salary) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, experience, profession, joining_date, salary], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ message: 'Database insert failed' });
    }
    res.json({ message: 'Employee added successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
