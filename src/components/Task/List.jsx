import React, { useState, useEffect, useCallback } from 'react'
import { ListGroup } from 'react-bootstrap'
import { URL_DB } from '../../services/jsonServerManager'
import { TaskView } from './View'

export const TaskList = (props) => {
    const [alltaskList, setTaskList] = useState([]);

    async function getData(){
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch(URL_DB, requestOptions)
            .then((response) => response.json())
            .then((result) => setTaskList(result))
            .catch((error) => console.log("error", error))
    }

    useEffect(()=>{
        getData()
    }, [alltaskList, setTaskList])

    var tasks = alltaskList.map(auxTask => <TaskView task={auxTask} />)

    return (
        <>
            <ListGroup as="ul" className='d-flex flex-row flex-wrap justify-content-around'>
                {tasks}
            </ListGroup>
        </>
    )
}