export const resolvers = {
    Query: {
        characters: (parent, args, { prisma }) => {
            return prisma().character.findMany()
        }
    },
    Mutation: {
        createCharacter: async (parent, args, { prisma }) => {
            console.log('context', prisma)
            const createdCharacter = await prisma().character.create({
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