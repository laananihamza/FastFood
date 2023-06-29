import { Inertia } from "@inertiajs/inertia"
import { INIT } from "./actions"

export const reduce = (state, action) => {
    switch (action.type) {
        case INIT.INCREMENT:
            return {
                ...state,
                quantity: Inertia.put(route(`updateCart`), state?.find((pr) => pr.id === action.payload.id).quantity++)
            }
        case INIT.DECEMENT:
            return {
                ...state,
                quantity: Inertia.put(route(`updateCart`), state?.find((pr) => pr.id === action.payload.id).quantity--)
            }
        case INIT.REMOVE_PRODUCT:
            return
    }
}
