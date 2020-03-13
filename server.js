const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: "Wellcome to the ContactKeeper API ..."}));

//Creating end points in order to provide our app a place to hit in order to do certain things like registering users, login users, get contatcs, update contatcs ..
// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
