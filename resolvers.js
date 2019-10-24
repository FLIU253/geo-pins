const user = {
  _id: "1",
  name: "Frank",
  email: "franklin_liu3@hotmail.com",
  picture: "https://images2.alphacoders.com/100/thumb-350-1008472.png"
};

module.exports = {
  Query: {
    me: () => user
  }
};
