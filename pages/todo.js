import * as React from "react";
import CardContainerComponent from "../components/card";
import SearchBarComponent from '../components/search-bar';
import TabsComponent from '../components/tabs';

export const Todo = () => {
    return (
        <TabsComponent>
            <SearchBarComponent />
            <CardContainerComponent />
        </TabsComponent>
    );
};

export default Todo