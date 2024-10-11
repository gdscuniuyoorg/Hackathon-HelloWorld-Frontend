/* eslint-disable react/prop-types */
/**
 * @typedef {object} FieldProps
 * @property {string} type
 * @property {string} name 
 * @property {string} placeholder
 * @property {boolean=} required
 * @property {string} text
 * @param {FieldProps} param0
 */
export default function Field({ text, ...props }) {
    return (
        <div>
            <label
                htmlFor={props.name}
                className="d_flex"
            >
                <span>{text}</span>
                <input {...props} />
            </label>
        </div>
    )
}