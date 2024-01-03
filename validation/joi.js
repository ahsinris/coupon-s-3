import Joi from "joi";


class Validation {
    async createCouponValidation(req, res, next) {
        try {

            let schema = Joi.object({
                couponName: Joi.string().alphanum().min(3).max(30).required(),
                startDate: Joi.date().iso().min('now').required(),
                endDate: Joi.date().iso().greater(Joi.ref('startTime')).required()
            })
            await schema.validateAsync(req.body)

        }
        catch(e){
            
        }
    }
}

export default new Validation()