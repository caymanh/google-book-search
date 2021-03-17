import React from "react";
import "./List.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group my-4">{children}</ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item my-3">{children}</li>;
}
