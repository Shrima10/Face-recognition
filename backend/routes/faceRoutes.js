const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

// POST /api/face/register
router.post('/register', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name required" });

  // Call Python script to register face
  exec(`python ../face-recognition/register_face.py "${name}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ message: 'Face registration failed' });
    }
    res.json({ message: stdout.trim() || `Registered face for ${name}` });
  });
});

module.exports = router;
