const lessonState = {
    lessons: [
        { id: 1, name: "հայերեն", duration: "4", price: "50000", lecturerName: "Կարինե" },
        { id: 2, name: "աշխարհագրություն", duration: "40000", price: "60000", lecturerName: "Կարեն" },
        { id: 3, name: "ֆիզիկա", duration: "3", price: "40000", lecturerName: "Մարիամ" }
    ],
    lesson:[
        {value:1,label:"Php"},
        {value:2,label:"C++"},
        {value:3,label:"Java"},
        {value:4,label:"Vue js"},
        {value:5,label:"Laravel"},
        {value:6,label:"Redux"},
        {value:7,label:"Angular"},
        {value:8,label:"Pyton"},
        {value:9,label:"JavaScript"}
    ]
}
export const lessonReducer = (state = lessonState, option) => {
    switch (option.type) {
        case "AddLesson":
            state.lessons.push(option.paylood)
            break
        default:
            break;
    }
    return { ...state }
}
