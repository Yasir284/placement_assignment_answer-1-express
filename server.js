import app from "./app.js";
// PORT is 4000
app.listen(process.env.PORT, () =>
  console.log(`App is listening at port:${process.env.PORT}`)
);
