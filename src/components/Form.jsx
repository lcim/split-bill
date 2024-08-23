import Input from "./Input";

const Form = ({ children, clssName, onSubmit,   }) => {
    return (
        <div>
            <form onSubmit={onSubmit} className={`${clssName} grid `}>{children}</form>
        </div>
    )
}

export default Form;
