const customerSchema = require('../model/Customer');

const saveCustomer = (req,res)=>{
    const customer = new customerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customer.save().then(result=>{
        res.json({data:{status:201,massage:'Customer saved...'}});
    }).catch(err=>{
        console.log(err);
        res.json(err);// by default error is json object...
    })
};
module.exports = {saveCustomer};