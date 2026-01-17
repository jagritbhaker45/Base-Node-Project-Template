const {statuscodes}=require('http-status-codes');

const info=(req,res)=>{
  return res.status(statuscodes.OK).json({
    success:true,
    message:'Api is live',
    error:{},
    data:{}
  })
}

module.exports={
  info
}