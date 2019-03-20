const user = {
  _id: "1",
  name: "Andreas",
  email: "andreaslydemann@gmail.com",
  picture: "https://cloudinary/asdf"
};

module.exports = {
  Query: {
    me: () => user
  }
};
