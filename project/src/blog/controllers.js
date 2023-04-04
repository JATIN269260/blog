const { Blog } = require("./models");

//creating and reading blogs

const createNewBlog = async (req, res) => {
  console.log(req.body);
  var newBlog=(await Blog.create(req.body)).populate("user_id");

  var allBlogs = await Blog.find().populate("user_id"); //object id
  return res.json({ status: "Created", allBlogs }); //newBlog
};

const getBlogbyUser = async (req , res) => {
  var displayBlogs = await Blog.find({user_id: req.body.user_id});

  return res.json({status :"Blogs FOUND !!" , displayBlogs})

};


const getBlogbyId = async (req , res) => {

  var displayBlog = await Blog.find({_id: req.body.id});

  return res.json({status :"Blog FOUND !!" , displayBlog})

};

const editBlog = async(req , res) =>{
  var updatedBlog = await Blog.findOne({ title: req.body.title });
  updatedBlog.description = req.body.newDescription;
  await updatedBlog.save();

  return res.json({status:"Blog edited successfully" , updatedBlog})
};

const deleteBlogbyId = async (req , res) => {
  var _id = req.body.id;
  var displayBlog = await Blog.findById(_id);
  await Blog.findByIdAndDelete(_id)
  return res.json({status :"Blog DELETED !!" , displayBlog})

};

module.exports = { createNewBlog , editBlog  , getBlogbyUser , getBlogbyId ,deleteBlogbyId};
