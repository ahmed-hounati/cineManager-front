import { useState } from "react";


const useFormData = (initalValue) => {


    const [formData, setFormData] = useState(initalValue);

    const handleChange = ({name, value, files}) => {
        if(files && files[0]){
            setFormData((prev) => {
                return {...prev, [name]:files[0]}
            });
        }
        else{
            setFormData((prev) => {
                return {...prev, [name]:value}
            });
        }
    }

    const onSubmit = (callback) => {
        callback(formData)
    }




    return {
        formData,
        handleChange,
        onSubmit,
    }
}

export default useFormData;