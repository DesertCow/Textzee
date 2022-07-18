const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

// app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
app.listen(PORT, () => console.log(`\n\n\n🚀  Live API: \x1b[34mhttp://localhost:${PORT}/\x1b[0m 🚀\n\n`));
//console.log(`💡     Database Connection:  \x1b[32mOnline\x1b[0m     💡`);
// console.log(`${activity}`);
// console.log(`🚀  Live API: \x1b[34mhttp://localhost:${PORT}/api\x1b[0m 🚀\n\n`);
