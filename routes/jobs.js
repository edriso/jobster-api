const express = require("express");
const testUser = require("../middleware/testUser");
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} = require("../controllers/jobs");
const router = express.Router();

router.route("/").post(testUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
