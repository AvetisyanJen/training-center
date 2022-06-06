const studentState={
    students:[{
        id: 1,
        name: "Անահիտ",
        surname: "Պետրոսյան",
        phone: "12-34-56",
        email: "An@mail.ru",
        registerDate: "20.05.2014",
        Lesson:["Php","Laravel"]
       
      },
  
      {
        id: 2,
        name: "Համո",
        surname: "Պետիկյան",
        phone: "52-34-56",
        email: "ham@mail.ru",
        registerDate: "5.05.2014",
        Lesson:["JS","Redux","Node"]
      
      },
      {
        id: 3,
        name: "Հնազանդ",
        surname: "Հնազանդյան",
        phone: "27-55-56",
        email: "hn@mail.ru",
        registerDate: "10.05.2016",
        Lesson:["Java","JS"]
      }
    
    ],
  
   les:[]
}
export const studentReducer = (state = studentState, option) => {
    switch (option.type) {
      case "Addstudent":
        state.students.push(option.paylood)
        break
        case "deletUser":
          state. students= state. students.filter(el => el.id !== option.payload)
          break
          case "Addles":
            state.les.push(option.paylood)
      default:
        break
    }
    return { ...state }
  };
  