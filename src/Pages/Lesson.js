import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddLesson } from "../Store/lessons/action";

function Lesson() {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    return (
        <>
            <form
                className="w-25 p-2 border text-center"
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                    let less = {
                        ...data,
                        id: Math.round(Math.random() * 50),
                        userId: Math.round(Math.random() * 50),
                    };
                    dispatch(AddLesson(less));
                    reset();
                })}
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
                        {...register("duration", { required: true })}
                        placeholder="duration"
                        className="form-control mb-2"
                    />
                    {errors.duration && <p>Last name is required.</p>}
                </div>
                <div className="form-group">
                    <input
                        {...register("price", { required: true, pattern: /\d+/ })}
                        placeholder="price"
                        className="form-control mb-2"
                    />
                    {errors.price && <p>Last name is required.</p>}
                    {errors.price && <p>Please enter number for price.</p>}
                </div>
                <div className="form-group">
                    <input
                        {...register("lecturerName", { required: true })}
                        placeholder="lecturerName"
                        className="form-control mb-2"
                    />
                    {errors.lecturerName && <p>Last name is required.</p>}
                </div>

                <input type="submit" className="btn btn-success" />
            </form>


        </>)
}
export default Lesson