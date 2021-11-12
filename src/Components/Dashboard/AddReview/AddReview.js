import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        axios.post('https://arcane-anchorage-83436.herokuapp.com/addReview', data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                setSuccess(true);
                reset();
            } 
        })
    };

    const resetAlert = () => {
        setSuccess(false);
    }

    return (
        <div className="container">
                { success && <div class="alert alert-success alert-dismissible fade show w-75 mx-auto" role="alert">Review Added
                    <button type="button" onClick={resetAlert} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> }

                <div className="text-center my-3">
                    <h2>Give A Review</h2>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">User Name</label>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={user.displayName} {...register("userName", { required: true })} className="form-control" placeholder="User Name"/>
                                    {errors.userName && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Image URL</label>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={ user?.photoURL } {...register("img")} className="form-control" placeholder="image url"/>
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Comment</label>
                                <div className="col-sm-10">
                                    <textarea type="text" {...register("comment", { required: true })} class="form-control" rows="3" placeholder="comment"/>
                                    {errors.comment && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10 offset-sm-2">
                                    <button type="submit" className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default AddReview;