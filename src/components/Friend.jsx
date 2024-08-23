// import Button from './Button'

const Friend = ({
    id,
    fname,
    balance,
    avatarSRC,
    className,
    onSelect,
    friend,
    selectedFriend,
}) => {
    const activeClass =
        selectedFriend?.id === friend?.id ? 'bg-slate-400 rounded-lg, ' : ''
    const activeBalance =
        friend?.balance < 0
            ? 'text-red-700'
            : friend?.balance === 0
              ? 'text-zinc-950'
              : 'text-lime-700'

    // make provision for subject verb agreement 
    const subjectVerbAgreement = balance < 0 ? 'owe' : 'owes'

    return (
        <div
            className={`${activeClass && activeClass} flex justify-between bg-slate-300 items-center min-w-72 my-3 rounded-lg p-1 `}
        >
            <img className="rounded-full " src={avatarSRC} alt={fname} />
            <div className=" flex flex-col w-full pl-6  ">
                <span className="font-bold">{fname}</span>
                <span className={`${activeBalance && activeBalance}`}>
                    {balance === 0
                        ? "We're all even"
                        : balance < 0
                          ? `You ${subjectVerbAgreement} ${fname} $${Math.abs(balance)}`
                          : `${fname} ${subjectVerbAgreement} you $${balance}`}
                </span>
            </div>
            <button
                onClick={() => onSelect({ id, fname, balance, avatarSRC })}
                className={`${className} bg-slate-400 ml-3 mt-0`}
            >
                {!activeClass ? 'Select' : 'Close'}
            </button>
        </div>
    )
}

export default Friend
