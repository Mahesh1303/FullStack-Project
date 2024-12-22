const URLDB = require("../models/Urlmodel");

const HandleGenerateShortURL = async (req, res) => {
  const { nanoid } = await import("nanoid");
  const body = req.body;
  if (!body.url) {
    res.status(400).json({
      error: "URL is required ",
    });
  }
  const shortid = nanoid(5);
  
  await URLDB.create({
    shortId: shortid,
    redirectURL: body.url,
    VisitHistory: [],
  });
  return res.json({ id: shortid });
};





const RedirectOrgURL=async (req,res)=>{
const shortId=req.params.id

const userURL=await URLDB.findOneAndUpdate({shortId},{$push :{
    VisitHistory:{

        timestamp:Date.now()
    }
}})
if(!userURL){
    return res.status(400).json({
        msg:"NO URL found"
    })
}
return res.redirect(userURL.redirectURL)
 


}


const HandlegetAnalyticsCount =async(req,res)=>{
const shortId=req.params.id
const result=await URLDB.findOne({shortId})

return res.json({
    TotalClicks:result.VisitHistory.length,
    VisitHistory:result.VisitHistory


})
    
    }


const HandleGetAllUrl=async(req,res)=>{
  const AllUrl=await URLDB.find({});
 return res.json(AllUrl)
  
 
}


const HandleDeleteUrl= async(req,res)=>{
const shortId=req.params.id
await URLDB.findOneAndDelete({shortId})
return res.json({
  message:"Url Deleted Successfully"
})

}

module.exports = { HandleGenerateShortURL ,RedirectOrgURL,HandlegetAnalyticsCount,HandleGetAllUrl,HandleDeleteUrl};
