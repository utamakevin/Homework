// function validateNewNote() {
//     // try using validation library joi
//     // cannot be empty
//     // need at least 2 characters
//   }


// exerpt from validate_new_note.js in middleware folder

const Joi = require('joi')
const AppError = require('../lib/app_error.js')


const schema = Joi.object({
  content: Joi.string()
  .min(2)
  .required(),
})

function validateNewNote() {
  const { value, error } = schema.validate({ content: 'h' })

  if(error) {
    throw new AppError(400, error.message)
  }
  
    next()
}


module.exports = validateNewNote