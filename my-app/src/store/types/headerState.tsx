export interface HeaderState {
    isOpen:boolean;
}

export enum HeaderActions {
  CLOSE_MENU = "CLOSE_MENU",
  OPEN_MENU = "OPEN_MENU"
}

interface CloseMenuAction {
    type: HeaderActions.CLOSE_MENU;
}

interface OpenMenuAction {
    type: HeaderActions.OPEN_MENU;
}

export function OpenMenu() {
    return {
        type:HeaderActions.OPEN_MENU,
    }
}

export function CloseMenu() {
    return {
        type:HeaderActions.CLOSE_MENU,
    }
}

export type HeaderAction = CloseMenuAction | OpenMenuAction