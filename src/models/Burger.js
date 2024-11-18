import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
    name: { type: String, maxlength: 25, required: true },
    cost: { type: Number, max: 100, required: true },
    isVegan: { type: Boolean, required: true },
});
