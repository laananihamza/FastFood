import { Inertia } from "@inertiajs/inertia"
import { INIT } from "./actions"

export const reduce = (state, action) => {
    switch (action.type) {
        case INIT.INCREMENT:
            return {
                ...state,
                quantity: Inertia.put(route(`updateCart`), {quantity: state?.find((pr) => pr.id === action.payload.id).quantity++, product_id: action.payload.id})
            }
        case INIT.DECEMENT:
            return {
                ...state,
                quantity: Inertia.put(route(`updateCart`), {quantity: state?.find((pr) => pr.id === action.payload.id).quantity--, product_id: action.payload.id})
            }
        case INIT.REMOVE_PRODUCT:
            return
    }
}
