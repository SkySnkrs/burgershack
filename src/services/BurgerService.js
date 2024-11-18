import { dbContext } from "../db/DbContext"

class BurgerService {

    async deleteBurger(burgerId) {
        const burgerToDelete = await dbContext.Burgers.findByIdAndDelete(burgerId)
        if (burgerId == null) {
            throw new Error(`Invalid id: ${burgerId}`)
        }
        return burgerToDelete
    }

    getBurgers() {
        const burgers = dbContext.Burgers.find()
        return burgers
    }

    async postBurgers(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }

}

export const burgerService = new BurgerService()