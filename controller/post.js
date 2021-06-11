const Post = require('../models/post')

exports.getPost = (req, res) => {
  // res.json({
  //   posts: [
  //     {title:'First Post'},
  //     {title:'Second Post'}
  //   ]
  // })

  const posts = Post.find()
  .select("_id title body")
  .then((posts)=>{
    //res.status(200).json({posts:posts})
    res.json({//posts:posts
      posts
    })

  })
  .catch(err=>{
    console.log(err)
  })
}


exports.createPost = (req,res)=>{
  const post = new Post(req.body)
  //console.log("CREATE POST: ",req.body)
  post.save((err,result)=>{
    //check error
    // if(err){
    //   return res.status(400).json({
    //     error : err
    //   })
    // }
    res.status(200).json({
       post : result
     })
  })
}
