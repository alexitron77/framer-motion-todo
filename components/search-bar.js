import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { TodoContext } from '../contexts/todoContext';
import styles from "../styles/SearchBar.module.scss";

const SearchBarComponent = () => {
    const [todoList, setTodoList] = useContext(TodoContext)
    const [inputValue, setInputValue] = useState('')

    const appendTodo = () => {
        if (inputValue == "") return
        setTodoList(oldArray => [...oldArray, inputValue])
        setInputValue('')
    }

    return (
        <>
            <div className={styles.searchBar}>
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
                <motion.div className={styles.createBtn}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={appendTodo}>
                    Create
                </motion.div>
            </div>
            <div k={styles.divider}>
                <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 2
                        }}
                        strokeWidth={4}
                        d="M 0, 5 L 100, 5"
                    />
                </svg>
            </div>
        </>
    )
}

export default SearchBarComponent