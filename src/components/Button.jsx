const Button = ({ children, className, onAddFriend }) => {
    return (
        <button onClick={onAddFriend} className={`${className} mt-3 max-w-28 `}>
            {children}
        </button>
    )
}

export default Button
