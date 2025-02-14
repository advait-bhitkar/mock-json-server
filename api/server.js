const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'db.json');
const data = fs.readFileSync(filePath, 'utf-8');
const db = JSON.parse(data);
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); // Needed for parsing JSON request bodies

// 🔹 Custom POST Handler (Handles Any Route)
server.post('*', (req, res) => {
    const route = req.path.replace(/^\/+/, ''); // Remove leading "/"
    
    if (!db[route]) {
        return res.status(404).json({
            success: false,
            message: `Endpoint "${route}" not found in db.json`
        });
    }

    const newEntry = {
        id: crypto.randomUUID(), // Generate unique ID
        ...req.body
    };

    db[route].push(newEntry); // Add entry to corresponding array in db.json

    // Save updated data back to db.json
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

    res.status(201).json({
        success: true,
        message: `Data added to "${route}" successfully!`,
        data: newEntry
    });
});

// 🔹 Custom Rewrites
server.use(jsonServer.rewriter({
    '/mobile/api/v1/homepage/get-data': '/delivery-widget-data',
    '/consumer-app/api/v1/homepage/get-data': '/delivery-widget-data'
}));

server.use(router);

server.listen(3000, () => {
    console.log('✅ JSON Server is running on port 3000');
});

// Export the Server API
module.exports = server;
