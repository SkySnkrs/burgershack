import mongoose from 'mongoose'
import { BurgerSchema } from '../models/Burger';

class DbContext {
  Burgers = mongoose.model('Burger', BurgerSchema)
}

export const dbContext = new DbContext()
