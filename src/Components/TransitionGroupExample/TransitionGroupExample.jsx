import React, { useState } from 'react';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import uniqId from "uniqid"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TransitionGroupExample.css"

// http://reactcommunity.org/react-transition-group/css-transition/
// https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

// React Transition Group изменяет классы при изменении жизненного цикла компонента

function TransitionGroupExample() {
    const [items, setItems] = useState([
        { id: uniqId(), text: 'Buy eggs' },
        { id: uniqId(), text: 'Pay bills' },
        { id: uniqId(), text: 'Invite friends over' },
        { id: uniqId(), text: 'Fix the TV' },
    ]);
    return (
        <Container style={{ marginTop: '2rem' }}>
            <ListGroup style={{ marginBottom: '1rem' }}>
                <TransitionGroup className="todo-list">
                    {items.map(({ id, text }) => (
                        <CSSTransition
                            key={id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListGroup.Item>
                                <Button
                                    className="remove-btn"
                                    variant="danger"
                                    size="sm"
                                    onClick={() =>
                                        setItems(items =>
                                            items.filter(item => item.id !== id)
                                        )
                                    }
                                >
                                    &times;
                                </Button>
                                {text}
                            </ListGroup.Item>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            <Button
                onClick={() => {
                    // const text = prompt('Enter some text');
                    const text = uniqId();
                    if (text) {
                        setItems(items => [
                            ...items,
                            { id: uniqId(), text },
                        ]);
                    }
                }}
            >
                Add Item
            </Button>
        </Container>
    );
}
export default TransitionGroupExample;
