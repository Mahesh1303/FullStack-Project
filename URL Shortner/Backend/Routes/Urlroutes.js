const express=require('express');

const{HandleGenerateShortURL,RedirectOrgURL,HandlegetAnalyticsCount,HandleGetAllUrl,HandleDeleteUrl}=require('../controllers/Urlcontroller')


const router=express.Router()


router.post('/',HandleGenerateShortURL)

router.get('/:id',RedirectOrgURL)

router.get('/analytics/:id',HandlegetAnalyticsCount)

router.get('/',HandleGetAllUrl)

router.delete('/:id',HandleDeleteUrl)


module.exports=router