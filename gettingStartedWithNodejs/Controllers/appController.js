const homeController=(req,res)=>{
  res.send('Server is running!');
}

const aboutController=(req,res)=>{
res.send('About Us');
}

const contactController=(req,res)=>{
res.send('Contact Us');
}

module.exports={
  homeController,
  aboutController,
  contactController,
}


