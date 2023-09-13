const express = require("express");
const testUser = require("../middleware/testUser");
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require("../controllers/jobs");
const router = express.Router();

router.route("/").post(testUser, createJob).get(getAllJobs);

router
  .route("/:id")
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
