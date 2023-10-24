# ForkFiesta Menu Microservice

Welcome to the ForkFiesta Menu Microservice! This microservice allows you to manage the menu of the restaurant. It provides GraphQL endpoints for creating new foods, viewing all menu items, and deleting foods.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js:** You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/forkFiestaTeam/forkFiestaMenu.git
   cd forkFiestaMenu
    ```

2. **Install Dependencies:**

   ```bash
   npm install
    ```

2. **Set Up Environment Variables:**

   ```bash
    MONGODB_URI=
    ```
    - MONGODB_URI: MongoDB connection URI.

2. **Run the Server:**

   ```bash
    npm start
    ```

    The GraphQL server will be accessible at http://localhost:3000/graphql.

## GraphQL Endpoints
- GET /graphql: Access the GraphQL Playground for exploring and testing the API.

## GraphQL Queries and Mutations
- Query: Get All Foods
   ```graphql
    {
        foods {
            id
            name
            price
            description
            category
        }
    }
    ```

- Mutation: Add Food
   ```graphql
    mutation {
        addFood(name: "New Food", price: 10.99, description: "Delicious dish", category: "Main Course") {
            id
            name
            price
            description
            category
        }
    }
    ```

- Mutation: Delete Food
   ```graphql
    mutation {
    deleteFood(id: "<food-id>") {
            id
            name
        }
    }
    ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.