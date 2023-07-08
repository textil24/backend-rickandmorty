export const typeDefs = `#graphql

    type Query {
        characters: [Character!]!
    }

    type Mutation {
        createCharacter(input: CharacterInput): Character
    }

    input CharacterInput {
        image: String!
        name: String!
        gender: String!
    }

    type Character {
        id: Int!
        image: String!
        name: String!
        gender: String!
    }

`