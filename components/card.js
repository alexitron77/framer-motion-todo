import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { TodoContext } from '../contexts/todoContext';
import styles from "../styles/Card.module.scss";

const CardComponent = ({ content }) => {
  const [todoList, setTodoList] = useContext(TodoContext)
  const currentCardTitle = useRef(null)

  const cardVariant = {
    hover: {
      scale: 1.05,
      backgroundColor: "var(--coral-rgba-30)",
      transition: {
        duration: 0.1,
        when: "beforeChildren"
      }
    },
    initial: {
      scale: 1, borderRadius: "5px", backgroundColor: "var(--white)"
    }
  }

  const editButtonsVariant = {
    hover: {
      opacity: 1,
      //   transition: {
      //   duration: 0.1
      // }
    },
    initial: {
      opacity: 0,
    },
  }

  const deleteAction = (event) => {
    const eltToDelete = currentCardTitle.current.innerText;
    setTodoList((oldTodoList) => oldTodoList.filter(todo => todo !== eltToDelete))
  }

  const editAction = () => {
    console.log("edit todo")
  }

  return (
    <motion.div variants={cardVariant} initial="initial" whileHover="hover">
      <Card className={styles.card} sx={{ "--card-bg": "none", "color": "none" }}>
        <CardBody className={styles.cardBody}>
          <Text ref={currentCardTitle}> {content} </Text>
          <motion.div variants={editButtonsVariant}>
            <EditIcon className={styles.cardEditBtn} onClick={() => editAction()} />
            <DeleteIcon className={styles.cardEditBtn} onClick={() => deleteAction()} />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default CardComponent
