const mongoose=require('mongoose')

const URLSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
        


    },
    VisitHistory:[
        {
            timestamp:{
                type:Number
            }
        }

    ]

},{timestamps:true})


const URLDB =mongoose.model('URL', URLSchema)


module.exports=URLDB