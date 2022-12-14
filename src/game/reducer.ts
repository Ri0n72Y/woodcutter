import * as I from "./models.typed";
import { ActionType as T, Action } from "./actions";

export function stateReducer(state: I.IGameState, action: Action) {
    switch (action.type) {
        case T.TIME_NEXT: return { ...state, time: state.time + 1 };
        default: return state;
    }
}