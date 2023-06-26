const { ApolloServer } = require('apollo-server-express');

const db = {
    connect: async () => {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log('Connected to the database');
    },
  };
  
  module.exports = db;
  
