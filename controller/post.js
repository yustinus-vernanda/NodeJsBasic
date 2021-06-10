const Post = require('../models/post')

exports.getPost = (req, res) => {
  res.json({
    posts: [
      {title:'First Post'},
      {title:'Second Post'}
    ]
  })
}


exports.createPost = (req,res)=>{
  const post = new Post(req.body)
  //console.log("CREATE POST: ",req.body)
  post.save((err,result)=>{
    if(err){
      return res.status(400).json({
        error : err
      })
    }
    res.status(200).json({
      post : result
    })
  })
}
