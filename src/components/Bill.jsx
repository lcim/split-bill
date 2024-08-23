import { useState } from 'react'
import Button from './Button'
import Form from './Form'

const Bill = ({ className, selectedFriend, onSplit }) => {
    // create state to manage bill
    const [decide, setDecide] = useState({
        bill: '',
        currentPayer: '',
        whoPays: '',
    })

    const paidByFriend =
    // Insure the amount paid as bill is not greater than the bill
        Number(decide.bill) >= Number(decide.currentPayer)
            ? Number(decide.bill) - Number(decide.currentPayer)
            : setDecide((decide) => ({ ...decide, currentPayer: Number(decide.bill )}))

    function handleChange(e) {
        // destructure name and value from the event target object
        const { name, value } = e.target
        setDecide({ ...decide, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // ensure bill and bill payer are filled
        if (!decide.bill || !decide.currentPayer) return

        // call onSplit function and supply it a parameter depending on who is the current payer. If your friend pays, the amount is subtracted from your balance kept between two of you, else you increase what your friend is owing you.
        onSplit(
            decide.whoPays === 'Your_friend'
                ? -Number(decide.currentPayer)
                : Number(paidByFriend)
        )
        // console.log(decide.whoPays)
    }

    // Create tailwind css values for your input element
    const bill_input = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required';

    return (
        <main className="bg-slate-300 h-auto min-h-96 flex flex-col justify-center items-center gap-y-3 min-w-80 rounded-lg ">
            <h2 className="font-bold font-lg mt-6 ">
                SPLIT BILL WITH {selectedFriend.fname}
            </h2>
            <Form
                onSubmit={handleSubmit}
                className="flex flex-col m-3 justify-center items-center flex-wrap  "
            >
                <div
                    className="flex justify-between items-center gap-12  mb-5"
                    id=""
                >
                    <label
                        htmlFor="bill_value"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Bill Value
                    </label>
                    <input
                        className={bill_input}
                        type="text"
                        name="bill"
                        value={decide.bill}
                        onChange={handleChange}
                        placeholder="Bill Value"
                    />
                </div>
                <div
                    className="flex justify-between items-center gap-12  mb-5"
                    id="bill_value"
                >
                    <label
                        htmlFor="your-expenses"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your expenses
                    </label>
                    <input
                        className={bill_input}
                        type="text"
                        name="currentPayer"
                        value={decide.currentPayer}
                        onChange={handleChange}
                        placeholder="Your expenses"
                        id="your-expenses"
                    />
                </div>
                <div
                    className="flex justify-between items-center gap-12  mb-5"
                    id="x-expenses"
                >
                    <label
                        htmlFor="x-expenses"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {selectedFriend.fname}&apos;s expenses
                    </label>
                    <input
                        className={bill_input}
                        type="text"
                        placeholder="X's expenses"
                        disabled
                        value={paidByFriend}
                    />
                </div>
                <div
                    className="flex justify-between items-center gap-12  mb-5"
                    id="payer"
                >
                    <label
                        htmlFor="payer"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Who&apos;s paying
                    </label>
                    <select
                        id="payer"
                        name="whoPays"
                        value={decide.whoPays}
                        onChange={handleChange}
                    >
                        <option value="default"  >
                            select payer
                        </option>
                        <option value="user_123">
                            You
                        </option>
                        <option value="Your_friend">
                            {selectedFriend.fname}
                        </option>
                    </select>
                </div>
                <Button className={`${className} justify-self-end mb-6 `}>
                    Split Bill
                </Button>
            </Form>
        </main>
    )
}

export default Bill;
