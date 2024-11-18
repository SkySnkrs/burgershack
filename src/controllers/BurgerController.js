import { burgerService } from "../services/BurgerService"
import BaseController from "../utils/BaseController"

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgerShack')
        this.router
            .get('', this.getBurgers)
            .post('', this.postBurgers)
            .delete('/:burgerId', this.deleteBurger)
    }
    async deleteBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgerService.deleteBurger(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
    async postBurgers(request, response, next) {
        try {
            const burgerData = request.body
            const burgers = await burgerService.postBurgers(burgerData)
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgerService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
}