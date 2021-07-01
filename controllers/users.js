// import Product from '../models/product.js'
import User from '../models/user.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found', messageTwo: err })
  }
}

export const addItemToBasket = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    console.log('USER ->', user)

    if (!user) throw new Error()

    const itemToAdd = { ...req.body }
    user.basket.push(itemToAdd)

    await user.save()

    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not found' })
  }
}