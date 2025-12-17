const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello Narendar Reddy Munagala from Jenkins CI/CD Pipeline!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

