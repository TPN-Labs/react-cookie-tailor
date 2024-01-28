import { CSSProperties } from "react";

export interface CookieTailorState {
  buttonStyle: CSSProperties;
  contentStyle: CSSProperties;
  declineButtonStyle: CSSProperties;
  overlayStyle: CSSProperties;
  style: CSSProperties;
  visible: boolean;
}

export const defaultState: CookieTailorState = {
  visible: false,
  style: {
    alignItems: "baseline",
    borderTop: "2px solid #2B567D",
    bottom: "0",
    color: "white",
    display: "block",
    flexWrap: "wrap",
    justifyContent: "space-between",
    left: "0",
    position: "fixed",
    width: "100%",
    zIndex: "999",
  },
  buttonStyle: {
    background: "#ffd42d",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "25px",
  },
  declineButtonStyle: {
    background: "#c12a2a",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "#e5e5e5",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px",
  },
  contentStyle: {
    display: "flex",
    justifyContent: "center",
  },
  overlayStyle: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: "999",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};
