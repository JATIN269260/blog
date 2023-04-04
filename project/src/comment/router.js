const express = require("express");
const { isAuthenticated } = require("../helper/utils");
const { createNewComment , getCommentbyUser , getCommentbyId , editComment  ,deleteCommentbyId} = require("./controllers");
const commentRouter = express.Router();

commentRouter.post("/comment", isAuthenticated,createNewComment );
commentRouter.put("/update" , isAuthenticated , editComment);
commentRouter.get("/getbyuser" , isAuthenticated , getCommentbyUser);
commentRouter.get("/getbyid" , isAuthenticated , getCommentbyId);
commentRouter.delete("/deletebyid" , isAuthenticated , deleteCommentbyId);

module.exports = { commentRouter };