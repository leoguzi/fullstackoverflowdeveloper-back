import Joi from '../../node_modules/joi/lib/index';

const questionSchema = Joi.object({
  question: Joi.string().required(),
  student: Joi.string().required(),
  studentClass: Joi.string().required(),
  tags: Joi.string().required(),
});

export default questionSchema;
