const Mutation = {
    async createItem(parent, args, ctx, info) {
        return await ctx.db.mutation.createItem(args);
    }
};

module.exports = Mutation;
