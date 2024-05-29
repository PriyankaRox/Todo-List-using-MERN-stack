const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://priyankavrokhade:Priyanka@123@cluster0.lfih2iu.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  )
  .then(() => console.log('DB connected successfully'))
  .catch((err) =>
    console.log('Something went wrong when connecting to the database', err),
  );

// mongodb+srv://admin:1234@cluster0.0lord.mongodb.net/todo?retryWrites=true&w=majority
