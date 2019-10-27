import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { formAction } from '../actions/FormAction';



const Form = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        designation: ""
    });




    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        const { name, organization, designation } = formData;
        e.preventDefault();
        console.log(formData);
        const dataObj = {
            name,
            organization,
            designation

        }

        dispatch(await formAction(dataObj));


    }

    const { name, organization, designation } = formData;
    // const dispatch = useDispatch();
    return (
        <div className="card mb-3 col-sm-6 shadow" style={{ margin: "auto" }}>
            <div className="card-header display-4 text-center shadow">
                Add Person
        </div>
            <div className="card-body">
                <form onSubmit={e => {
                    onSubmit(e);
                }}>
                    <div className="form-group">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            name="name"
                            placeholder="Enter Name"
                            onChange={e => onChange(e)} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="organization"><strong>Organization</strong></label>
                        <input
                            type="text"
                            value={organization}
                            className="form-control"
                            name="organization"
                            placeholder="Enter Organization"
                            onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation"><strong>Designation</strong></label>
                        <input
                            type="text"
                            value={designation}
                            className="form-control"
                            name="designation"
                            placeholder="Enter Designation"
                            onChange={e => onChange(e)} />
                    </div>
                    <input type="submit" value="Add Person" className="btn btn-primary btn-block" />
                </form>
            </div>



        </div>
    )
}

export default Form;
