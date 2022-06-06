export function DeletUser(id) {
    return {
        type: "deletUser",
        payload: id
    }
}
export function Addstudent(stud) {
    return {
        type: "Addstudent",
        paylood: stud
    }
}
export function Addles(Lesson){
    return{
        type: "Addles",
        paylood: Lesson
    }
}