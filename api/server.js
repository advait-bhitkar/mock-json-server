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
        "checkIns": [
            {
                "id": "b673ca71-9eff-4432-a72a-967140002090",
                "brewery": "Odell",
                "beerName": "Mountain Standard",
                "beerType": "Red",
                "review": "Was excellent!",
                "rating": 4,
                "servingStyle": "Draft",
                "location": "Brewery"
            },
            {
                "id": "1e4426d1-c690-48d2-b27d-490503b258a8",
                "brewery": "Avery",
                "beerName": "Clear Horizons",
                "beerType": "IPA",
                "review": "Not too bad",
                "rating": 2,
                "servingStyle": "Can",
                "location": "Bar"
            },
            {
                "id": "3b9c91f3-e804-4c22-b8f1-ff6dabc1881e",
                "brewery": "Green Mountain",
                "beerName": "Watermelon Sour",
                "beerType": "Sour",
                "review": "Way too sour. Do not recommend.",
                "rating": 1,
                "servingStyle": "Draft",
                "location": "Brewery"
            },
            {
                "id": "53c5d4e7-529e-42b0-9a8f-a3965d5cf574",
                "brewery": "4 Noses",
                "beerName": "Tranquil",
                "beerType": "Stout",
                "review": "Very good",
                "rating": 4,
                "servingStyle": "Bottle",
                "location": "Restaurant"
            },
            {
                "id": "b01f3c43-e86e-4ca5-88a3-fbaa7455efe0",
                "brewery": "Banded Oak",
                "beerName": "Scotch Ale",
                "beerType": "Amber",
                "review": "Drain pour!",
                "rating": 1,
                "servingStyle": "Draft",
                "location": "Home"
            },
            {
                "id": "be77b2b8-15a7-44f9-8ad3-51e8d5cf85f9",
                "brewery": "TRVE",
                "beerName": "Siren",
                "beerType": "Belgian",
                "review": "Very nice, great flavor.",
                "rating": 4,
                "servingStyle": "Draft",
                "location": "Bar"
            },
            {
                "id": "35971f83-3fff-4122-b73c-ee0f0058506d",
                "brewery": "Ratio Beerworks",
                "beerName": "Pale Lager",
                "beerType": "Lager",
                "review": "Smooth!",
                "rating": 3,
                "servingStyle": "Can",
                "location": "Brewery"
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
