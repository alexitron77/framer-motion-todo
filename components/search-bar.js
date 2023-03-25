import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { TodoContext } from '../contexts/todoContext';


const SearchBarComponent = () => {
    const [todoList, setTodoList] = useContext(TodoContext)
    const [inputValue, setInputValue] = useState('')

    const appendTodo = () => {
        if (inputValue == "") return
        setTodoList(oldArray => [...oldArray, inputValue])
        setInputValue('')
    }

    return (
        <div className="search-bar">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            appendTodo()
                        }
                    }}
                    color='coral'
                    placeholder='eg: buy new clothes tomorrow'
                    _placeholder={{ opacity: 0.4, color: 'inherit' }} />
            </InputGroup>
            <motion.div className="create-btn"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={appendTodo}>
                Create
            </motion.div>
        </div>
    )
}

export default SearchBarComponent