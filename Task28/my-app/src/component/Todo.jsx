import React, { useState } from 'react';
import { Field, Formik, Form, ErrorMessage } from "formik";
import {validSchema} from "./regex.js";


export function Todo() {
    const [todo, setTodo] = useState([])

    return (
        <div>
            <h2>TA-DA</h2>
            <Formik
                initialValues={{task: ""}}
                validationSchema={validSchema}
                onSubmit={(values,{resetForm}) => {
                    setTodo([...todo, values.task]);
                    resetForm()
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                type="text"
                                name="task"
                                placeholder="Введіть завдання"
                            />
                            <ErrorMessage
                                name="task"
                                component="div"
                            />
                        </div>
                        <button type="submit">Додати</button>
                    </Form>
                )}
            </Formik>

            <div>
                {todo.map((task, index) => (
                    <div key={index}>
                        <span>{task}</span>
                        <button onClick={() => setTodo(todo.filter((_, i) => i !== index))}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}