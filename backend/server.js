const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Your backend logic here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
