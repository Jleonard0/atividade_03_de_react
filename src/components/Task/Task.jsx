import React, { useState, useCallback } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NewTaskForm } from './Forms'
import { TaskList } from './List'

export const Task = () => {
    const [showForm, setShowForm] = useState(false)
    const handleClose = () => setShowForm(false)
    const handleShow = () => setShowForm(true)

    const wrapperSetShowForm = useCallback(
        val => {
            setShowForm(val)
        },
        [setShowForm]
    )

    async function deleteCollection(db, collectionPath, batchSize) {
        const collectionRef = db.collection(collectionPath);
        const query = collectionRef.orderBy('__name__').limit(batchSize);

        return new Promise((resolve, reject) => {
            deleteQueryBatch(db, query, resolve).catch(reject);
        });
    }

    return (
        <>
            <h2 className='mt-2'>Lista de tarefas</h2>
            <div>
                <Button className='mx-1' variant="primary" onClick={handleShow}>
                    Adicionar tarefa
                </Button>
            </div>

            <TaskList></TaskList>

            <Modal show={showForm} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewTaskForm id="formTask" showForm={showForm} wrapperSetShowForm={wrapperSetShowForm} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" form="formTask">
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
