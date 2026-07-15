const express = require('express')
const taskRoutes = require("./routes/taskRouter");
const cors = require("cors");
const {default: mongoose} = require('mongoose')
const mongodbURL="mongodb+srv://kirandikshit124_db_user:dikshit@projects.3gr107d.mongodb.net/task-manager?appName=Projects"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

const PORT = 3001;
mongoose.connect(mongodbURL)
.then(() => 
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  })
).catch((err) => {
  console.log("Error in conncting to MongoDB", err)
})