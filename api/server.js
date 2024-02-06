// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()

// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

// Comment out to allow write operations
const router = jsonServer.router(
    {
        "flights": [
            {
                "id": "b673ca71-9eff-4432-a72a-967140002090",
                "name": "Cancun Trip",
                "airline": "Southwest",
                "seatNumber": "20",
                "departureDate": "04/15/24",
                "arrivalDate": "04/30/24",
                "flightClass": "First",
            },
            {
                "id": "1e4426d1-c690-48d2-b27d-490503b258a8",
                "name": "France",
                "airline": "United",
                "seatNumber": "35",
                "departureDate": "06/22/24",
                "arrivalDate": "06/29/24",
                "flightClass": "Coach",
            },
            {
                "id": "3b9c91f3-e804-4c22-b8f1-ff6dabc1881e",
                "name": "Washington",
                "airline": "Delta",
                "seatNumber": "5",
                "departureDate": "03/28/24",
                "arrivalDate": "04/01/24",
                "flightClass": "Premium",
            },
            {
                "id": "53c5d4e7-529e-42b0-9a8f-a3965d5cf574",
                "name": "Canada",
                "airline": "United",
                "seatNumber": "56",
                "departureDate": "07/15/24",
                "arrivalDate": "07/30/24",
                "flightClass": "First",
            }
        ]
    }
);

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
