import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Addles, Addstudent } from "../Store/students/action";

function Student() {
    const dispatch = useDispatch();
    const { lesson } = useSelector(state => state.lesState)
    const { les } = useSelector(state => state.stState)
    console.log(les)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        const stud = {
            ...data,
            id: Math.round(Math.random() * 50),
            userId: Math.round(Math.random() * 50),
            registerDate: new Date().getDate() + "." + new Date().getMonth() + 1 + "." + new Date().getFullYear()
        };
        dispatch(Addstudent(stud))
        dispatch(Addles(stud.Lesson));

        reset();

    }

    return (<>
        <form
            className="w-25 p-2 border text-center"
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className="form-group">
                <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="form-control mb-2"
                />
                {errors.name && <p>Last name is required.</p>}
            </div>
            <div className="form-group">
                <input
                    {...register("surname", { required: true })}
                    placeholder="Surname"
                    className="form-control mb-2"
                />
                {errors.surname && <p>Last name is required.</p>}
            </div>
            <div className="form-group">
                <input
                    {...register("phone", { required: true, pattern: /\d+/ })}
                    placeholder="Phone"
                    className="form-control mb-2"
                />
                {errors.phone && <p>Last name is required.</p>}
                {errors.phone && <p>Please enter number for price.</p>}
            </div>
            <div className="form-group">
                <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="form-control mb-2"
                />
                {errors.email && <p>Last name is required.</p>}
            </div>
            <div className="form-group">
                <center>
                    <b>The selected lesson names:
                        <h6 style={{ color: "red" }}>
                            {les + " "}</h6>
                    </b>
                </center>

                <Controller
                    control={control}
                    defaultValue={lesson.map(c => c.value)}
                    name="Lesson"
                   

                    render={({ field: { onChange, value, ref } }) => (

                        <Select
                            className="form-control mb-2"
                            inputRef={ref}
                            value={lesson.filter(c => value.includes(c.label))}
                            onChange={val =>
                                onChange(val.map(c => c.label))}
                            options={lesson}
                            isMulti
                           
                        />

                    )}
                />

            </div>
            <input type="submit" className="btn btn-success" />
        </form>



    </>)
}
export default Student