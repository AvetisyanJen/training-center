import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Components/Header"
import Home from "../Pages/Home"
import Lesson from "../Pages/Lesson"
import Lessons from "../Pages/Lessons"
import Student from "../Pages/Student"
import Students from "../Pages/Students"

function Router() {
    return(<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="" element={<Home />} />
                <Route path="addLesson" element={<Lesson />} />
                <Route path="addStudent" element={<Student />} />
                <Route path="lessons" element={<Lessons />} />
                <Route path="students" element={<Students />} />

            </Route>
        </Routes>
    </BrowserRouter>
    </>)
}
export default Router