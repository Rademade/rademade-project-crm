import React    from 'react'
const FormSelect = ({ 
  input,
  label,
  type,
  getValue,
  items,
  inspect,
  meta: { touched, error, warning }
}) =>
  <div className="form-group">
    <label>{label}</label>
    <div>
      <select className="form-control" {...input} placeholder={label} type={type}>
        { items.map((item) => <option key={getValue(item)} value={getValue(item)}>{inspect(item)}</option>) }
      </select>
      {touched &&
        ((error &&
          <span>
            {error}
          </span>)
        )}
    </div>
  </div>
export default FormSelect
