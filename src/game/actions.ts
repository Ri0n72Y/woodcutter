export enum ActionType {
    TIME_NEXT
}

const T = ActionType;

export interface Action {
    type: ActionType;
    value: number | boolean | string;
}

interface ActionGroup {
    [key: string]: Action
}

export const Time: ActionGroup = {
    add: { type: T.TIME_NEXT, value: 1 },
}