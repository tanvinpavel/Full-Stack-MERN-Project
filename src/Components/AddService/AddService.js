import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post("http://localhost:5000/addService", data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Service added successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="text-center my-3">
                    <h2>Add Service</h2>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" {...register("title", { required: true })} className="form-control" placeholder="title"/>
                                    {errors.title && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input type="text" {...register("details", { required: true })} className="form-control" placeholder="description"/>
                                    {errors.details && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-sm-2 col-form-label">Image URL</label>
                                <div className="col-sm-10">
                                    <input type="text" {...register("img", { required: true })} className="form-control" placeholder="image url"/>
                                    {errors.img && <span>This field is required</span>}
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
        </div>
    );
};

export default AddService;