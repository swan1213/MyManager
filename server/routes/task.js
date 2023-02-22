const router = require("express").Router();

const {
  newTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
  saveCheckList,
  getTodaysTask,
  saveTaskCheckListTodos,
  getPastDueScheduleCheckList,
} = require("../controllers/task");
const {
  // newTaskValidator,
  updateTaskValidator,
  deleteTaskValidator,
  getTaskValidator,
} = require("../validators/task");
const results = require("../validators");
const isAuthenticated = require("../middleware/auth");

// Task Management front
// ** fetch todays task [from weekly] // Active Task
router.get("/get-todays-task", isAuthenticated, getTodaysTask);
router.get("/past-due-task", isAuthenticated, getPastDueScheduleCheckList);

// ** save task checklist Todos
router.post("/save-task-checklist", isAuthenticated, saveTaskCheckListTodos);

router.post(
  "/",
  isAuthenticated,
  // newTaskValidator, results,
  newTask
);

router.patch("/:id", isAuthenticated, updateTaskValidator, results, updateTask);

router.patch("/delete/:id", isAuthenticated, deleteTaskValidator, results, deleteTask);

router.get("/", isAuthenticated, getTasks);

// save checklist
router.post("/save-checklist", isAuthenticated, saveCheckList);

router.get("/:id", isAuthenticated, getTaskValidator, results, getTask);

module.exports = router;
