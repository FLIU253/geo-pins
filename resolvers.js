const { AuthenticationError } = require("apollo-server");

const user = {
  _id: "1",
  name: "Frank",
  email: "franklin_liu3@hotmail.com",
  picture: "https://images2.alphacoders.com/100/thumb-350-1008472.png"
};

const authenticated = next => (root, args, ctx, info) => {
  if (ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
