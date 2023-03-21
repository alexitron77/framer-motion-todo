import CardComponent from "./card"
import { motion } from "framer-motion";

const CardContainerComponent = ({ list }) => {
    return (
        <div className="todo-container">
            {list.map(todo => <CardComponent content={todo} />)}
        </div>
    )
}

export default CardContainerComponent
