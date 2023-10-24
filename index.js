require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const {buildSchema} = require('graphql');

const app = express();

mongoose.connect(process.env.MONGODB_SRV, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
	console.log('Connected to MongoDB');
});

const foodSchema = new mongoose.Schema({
	name: String,
	price: Number,
	description: String,
	category: String,
});

const FoodModel = mongoose.model('Food', foodSchema);

const schema = buildSchema(`
  ${require('fs').readFileSync(__dirname + '/schema.graphql', 'utf8')}
`);

const root = {
	foods: async () => {
		return await FoodModel.find();
	},
	addFood: async ({name, price, description, category}) => {
		const food = new FoodModel({name, price, description, category});
		await food.save();
		return food;
	},
	deleteFood: async ({id}) => {
		const deletedFood = await FoodModel.findByIdAndDelete(id);
		return deletedFood;
	},
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`GraphQL Server is running on http://localhost:${PORT}/graphql`);
});
