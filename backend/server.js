require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const questionRoutes = require("./routes/questions");

const PORT = process.env.PORT || 7000;

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
  const routesText = `
  <h1>Available methods</h1>
  <div>
    <pre><b>Check ./routes.js</b></pre>
  </div>
  
  <pre>
  QUESTION:

  router.post('/api/question'),
  router.get('/api/questions’),
  router.patch('/api/questions/:id),
  router.delete('/api/questions/:id),
  </pre>
    `;
  res.status(200).send(routesText);
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connecter to DB and listening on port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
