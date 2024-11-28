# Bike Shop Application

A backend application design for manage bike Order, Inventory and calculate revenue using TypeScript, Mongoose, Express and MongoDB.

## Features

- **Bike Inventory Management:** Add, update, retrieve and delete bike details.
- **Order Management:** Create orders, manage product quantities and automatically update bike inventory.
- **Revenue Calculation:** Calculate revenue dynamically.
- **Validation:** Uses zod for robust data validation to ensure accurate and consistent data entry.
- **Error Handling:** Effective error handling for a smooth application flow.

## Technology Used:

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose(ODM) 
- **Validation:** Zod -**Language:** TypeScript

***

## Setup Instruction:

Follow the step below to set up the project locally

1. **Prerequisite**

Ensure the following software installed on your system

- Node.js
- MongoDB
- Git

***

2. **Clone the repository**

`git clone https://github.com/Mohammadashif007/bike-store
 cd bike-store
`
***

3. **Install Dependencies**

Run the following command to install all necessary dependencies

`npm install`

***

4. **Environment Variables**

Create a .env file and add the following:

`PORT=3000
DATABASE_URL=mongodb+srv://ashif03:ashif03@cluster0.epw2d.mongodb.net/bike-shop?retryWrites=true&w=majority&appName=Cluster0`

***

5. **Run the Application**

Start the development server

`npm run start:dev`

***

6. **API Endpoints**

**Bikes:**

**_Add a new bikes_**

-   Endpoint: `/api/products`
-   Method: `POST`
-   Request Body:
    `{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}`


**_Retrieve all bikes_**

- Endpoint: `/api/bikes`
- Method: `GET`

***Retrieve a single bikes***

- Endpoint: `/api/bikes/:bikeId`
- Method: `GET`

***Update bike details***

- Endpoint: `/api/bikes/:bikeId`
- Method: `PUT`

***Delete a bike***

- Endpoint: `/api/bikes/:bikeId`
- Method: `Delete`


**Order**

***Place an Order***

- Endpoint: `/api/orders`
- Method: `POST`
- Request body: 
`
{
    "email": "customer@example.com",
    "product": "bikeId",
    "quantity": 2,
    "totalPrice": 2400
}
`

***Retrieve all orders***

- Endpoint: `/api/orders`
- Method: `GET`

***Calculate total revenue***

- Endpoint: `/api/orders/revenue`,
- Method: `GET`

***


## Contact

For inquiries or feedback please contact with me: 

- Email: mohammadashif.anik2@gamil.com
- github: Mohammadashif007

***