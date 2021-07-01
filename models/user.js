import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const basketSchema = new mongoose.Schema({
  items: { type: mongoose.Schema.ObjectId, ref: 'Product', required: true }
}, {
  timestamps: true
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  basket: [basketSchema]
})

// remove the password from the populated owner when it converts to json
userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password
    return json
  }
})

// Virtual field for password
userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// CUSTOM PRE VALIDATE
userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })


// CUSTOM PRE SAVE
userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// .methods allows you to create a method to use in a function to check the password is correct when loging in.
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema)