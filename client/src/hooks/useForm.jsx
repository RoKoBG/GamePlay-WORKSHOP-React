import { useState } from "react";
export default function useForm(initValues) {
    const [values, setValues] = useState(initValues, submitHandler);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = () => {
        e.preventDefault();

        submitHandler(values);
    };
    return {
        values,
        onChange,
        onSubmit
    };
}
