import React, { Component } from 'react';

const Select = ({name, label, error, options, ...rest}) => {
    return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select className="form-control" id={name} name={name} {...rest}>
            {options.map((o) => {
                return <option key={o._id} value={o._id}>{o.name}</option>
            })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
}
 
export default Select;