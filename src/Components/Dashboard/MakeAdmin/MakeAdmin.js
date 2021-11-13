import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://arcane-anchorage-83436.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                reset();
            }
        })
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">

                { success && <div className="alert alert-success alert-dismissible fade show" role="alert">New Admin added successfully.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> }

                <h2 className="text-center mb-3">Add An Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-12 mb-3">
                        <label for="inputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Admin Name" id="inputPassword1"/>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label for="inputEmail2" className="form-label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="form-control" placeholder="Admin Email" id="inputEmail2"/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-12 mb-3">
                        <label for="inputPassword3" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Admin Password" id="inputPassword3"/>
                    </div>
                    <button type="submit" className="btn btn-primary"> Add </button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;