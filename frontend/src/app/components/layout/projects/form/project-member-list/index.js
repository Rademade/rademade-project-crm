import React, { Component } from  'react'
import _                    from  'lodash'
import {Field}              from  'redux-form';
import renderField          from  'components/form/input'
import FormSelect           from  'components/form/select'

const ProjectMemberList = ({ 
  fields,
  developers,
  label,
  meta: { touched, error, warning }
}) =>
    <div>
      <span>{label}</span>
      { fields.map((member, i) =>
        <li className="form-inline" key={i}>
           <Field name={`${member}.developerId`}
                  label="Developer"
                  getValue={ (item) => item.id }
                  component={FormSelect}
                  items={developers}
                  inspect={ (item) => item.name }/>
           <Field type="text"
                  name={`${member}.hours`}
                  component={renderField}
                  label="h/sprint"/>
           <Field type="text"
                  name={`${member}.rate`}
                  component={renderField}
                  label="per hour"/>
           <button type="submit"
                   onClick={() => fields.remove(i)}
                   className="btn btn-default">Удалить</button>
        </li>
     )}
     <button onClick={() => fields.push({})}
             type="button"
             className="btn btn-primary">Add Teammate</button>
    </div>
export default ProjectMemberList
