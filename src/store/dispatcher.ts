import store from ".";
import * as actions from "./actions";

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}
export function isWidgetOpened(): boolean {
  return store.getState().behavior.showChat;
}
