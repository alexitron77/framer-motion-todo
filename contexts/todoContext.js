import React, { createContext, useState } from "react";

export const TodoContext = createContext(["whatever"]);

export const TodoProvider = ({ children }) => {
    const todoList = useState([]);
    return (
        <TodoContext.Provider value={todoList}>
            {children}
        </TodoContext.Provider>
    );
};


