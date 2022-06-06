import { useSelector } from "react-redux"

function Lessons(){
    const {lessons}=useSelector(state=>state.lesState)
    return(<>
     <table 
    className="table table-bordered table-success text-center">
        <thead>
            <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Price</th>
            <th>LecturerName</th>
            </tr>
        </thead>
        <tbody>
            {lessons.map((elm,i)=>{
               return <tr key={i}>
                   <td>{elm.name}</td>
                   <td>{elm.duration}</td>
                   <td>{elm.price}</td>
                   <td>{elm.lecturerName}</td>
               </tr>
            })

            }

        </tbody>
    </table>

    </>)
}
export default Lessons