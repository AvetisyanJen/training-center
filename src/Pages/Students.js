import { useDispatch, useSelector } from "react-redux"
import { DeletUser } from "../Store/students/action"

function Students() {
    const { students } = useSelector(state => state.stState)
    const dispatch = useDispatch()
    return (<>
        <table
            className="table table-bordered table-primary text-center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>RegisterDate</th>
                    <th>Lesson</th>
                    <th>Click</th>
                </tr>
            </thead>
            <tbody>
                {students.map((elm, i) => {
                    return <tr key={i}>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.phone}</td>
                        <td>{elm.email}</td>
                        <td>{elm.registerDate}</td>
                        <td><ul>
                            {elm.Lesson.map((el, i) => {
                                return <li key={i}>{el}
                                </li>
                            })}</ul>
                        </td>
                        <td>
                            <button onClick={() =>
                                (dispatch(DeletUser(elm.id)))}>
                                Delete</button>
                        </td>
                    </tr>
                })

                }
            </tbody>

        </table>

    </>)
}
export default Students