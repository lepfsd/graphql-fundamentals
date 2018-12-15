import {buildSchema} from 'graphql';

const schema = buildSchema(`
	type HackerNewsItem {
		id: String
		text: String
		timeISO: String
		title: String
		deleted: Boolean
		time: Int
	}
	type Email {
		email: String!
	}
	type User{
		id: ID
		firstName: String!
		lastName: String!
		email: String
		age: Int!
		gender: Gender
		items: [HackerNewsItem]
	}
	enum Gender{
		MALE
		FEMALE
		OTHER
	}
	type Query {
		item: HackerNewsItem 
		getUser(id: ID): User
		users: [User]
	}
	input HackerNewsInput{
		id: String
		text: String
		timeISO: String
		title: String
		deleted: Boolean
		time: Int
	}
	input UserInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String
		age: Int!
		gender: Gender
		items: [HackerNewsInput]
	}
	type Mutation {
		createUser(input: UserInput) : User
	}
`);

export default schema;