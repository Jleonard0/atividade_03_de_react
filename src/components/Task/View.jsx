import { Button, Card } from 'react-bootstrap'
import { ModalFormEditTask } from './Forms'
import { URL_DB } from '../../services/jsonServerManager'

export const TaskView = (props) => {
    async function handleDelete(id, taskName) {
        try {
            const requestOptions = {
                method: "DELETE",
                redirect: "follow",
            }

            await fetch(URL_DB+'/'+id, requestOptions)
                .then((response) => response.json())
            alert('tarefa ' + taskName + ' removida com sucesso.')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card className='mt-2 mx-1' style={{ width: '18rem' }} as="li" id={props.task.id} key={props.task.id}>
            <Card.Body>
                <Card.Title>{props.task.taskName}</Card.Title>
                <Card.Text>
                    Objetivo: {props.task.taskObs}
                </Card.Text>
                <Card.Text>
                    data de início: {props.task.taskStartDate}
                </Card.Text>
                <Card.Text>
                    data final: {props.task.taskEndDate}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className='m-1' variant="danger" onClick={() => handleDelete(props.task.id, props.task.taskName)}>Remover</Button>
                <ModalFormEditTask task={props.task} />
            </Card.Footer>
        </Card>
    )
}