import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const resolvers = {
    Query: {
        characters: () => {
            return prisma.character.findMany()
        }
    },
    Mutation: {
        createCharacter: async (parent, args, context, info) => {
            const createdCharacter = await prisma.character.create({
                data: {
                    image: args.input.image,
                    name: args.input.name,
                    gender: args.input.gender,
                },
            });

            return createdCharacter;
        }
    }
}