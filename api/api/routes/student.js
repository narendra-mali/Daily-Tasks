const express = require('express');
const router = express.Router();
const Student = require('../model/student')
const mongoose = require('mongoose');
const student = require('../model/student');

router.get('/',((req,res,next)=>{
    student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
           error:err 
        })
    });
}))
router.get('/:id',((req,res,next)=>{
    student.findById(req.params.Id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
           error:err 
        })
    });
}))

router.post('/',((req,res,next)=>{

    const student = new Student({
        _id : mongoose.Types.ObjectId,
        name: req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        gender :req.body.gender 
    })
    students.save()

    .then(result=>{
        console.log(result)
        res.status(200).json({
            newStudent: result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })

}))
router.delete('/:id',((req,res,next)=>{
    student.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message : 'student deleted',
            result : result  

        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
           error:err 
        })
    });
}))

module.exports = router;
