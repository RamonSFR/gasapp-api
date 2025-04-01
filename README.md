<p align="center"><img src="https://github.com/RamonSFR/GasApp/blob/main/src/assets/images/logo.png?raw=true" width="320px"></p>

# API
GASAPP API is a backend service to calculate the most efficient fuel between gasoline and ethanol in flex vehicles

Made with Node.js + Express.js

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Functionalities
* Recieves vehicle consuption and fuels prices data from the user/front-end via HTTP
* Calculates the most efficient fuel
* Returns cost for KM on each and the most efficient one


## Instalation requirements
* Git
* Node.js

## Installation
```bash
# Clone the repository
git clone https://github.com/seu-usuario/gasapp-api.git
cd gasapp-api

# Install dependencies
npm install
```

## Run server
```bash
node .\src\server.js --watch
```
Server will initialize on port port 3000 by default. If you want to set a different port, create a .env file with the variable:
```bash
    PORT = 4000
```

## Endpoints
<h3>GET /calc</h3>
<h4>Request:</h4>

```bash
{
  "ethConsume": 7.0,
  "gasConsume": 9.0,
  "ethPrice": 4.49,
  "gasPrice": 6.29
}
```
Response:
```bash
{
  "costForKmGas": 0.6988888888888889,
  "costForKmEth": 0.6414285714285715,
  "mostEfficentFuel": "Ethanol"
}
```