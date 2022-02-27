exports.getPosts = (req, res, next) => {
  res.status(200).json({
    "professionalName": 'ninja', 
    "professionalImage": ''
     ,
    "nameLink": {
         "firstName":'naruto',
         "url":'i am url'
    },
    "primaryDescription":'assassin',
    "workDescription1":'hokage' ,"workDescription2":'nine tailed fox',
    "linkTitleText":'boruto', 
    "linkedInLink": {
       "text":'i am linkedin text',
       "link":'i am linkedin link'
    },
     "githubLink": {
       "text":'i am text',
       "link":'i am link'
      }
   })
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
