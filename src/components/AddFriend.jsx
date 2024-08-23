import { useState } from 'react'
import Button from './Button'
import Form from './Form'

const AddFriend = ({  className, onModifyFriendsList }) => {
    const [friendData, setFriendData] = useState({
        fname: '',
        image: 'https://i.pravatar.cc/48?u=444444',
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFriendData({...friendData, [name]:value})
    }

    const id = crypto.randomUUID()

    function handleSubmit(e) {
        if (!friendData.fname || !friendData.image) return alert("complete all input fields")

        e.preventDefault()

        const newFriend = {
            id,
            fname: friendData.fname,
            image: `${friendData.image}?=${id}`,
            balance: 0,
        }

        // call handleSubmit passed down from parent component
        onModifyFriendsList(newFriend)

        // reset form inputs after submit event
        setFriendData({
            fname: '',
            image: 'https://i.pravatar.cc/48?u=444444',
        })
    }

    const input_field = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return (
        <div className="bg-slate-400 p-6 mt-9 rounded-lg">
            <Form
                onSubmit={handleSubmit}
                className="flex flex-col m-3 justify-center items-center flex-wrap  "
            >
                <div
                    className="flex flex-col justify-between items-center gap-3"
                    id=""
                >
                    <div className="flex justify-between w-full  items-center ">
                        <label
                            htmlFor="friend_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Friend&apos;s name
                        </label>
                        <input
                            className={input_field}
                            type="text"
                            name='fname'
                            onChange={handleChange}
                            value={friendData.fname}
                            placeholder="Friend's name"
                        />
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <label
                            htmlFor="image_url"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Image URL
                        </label>
                        <input
                            className={input_field}
                            type="text"
                            name='image'
                            onChange={handleChange}
                            value={friendData.image}
                            placeholder="Image URL"
                        />
                    </div>
                </div>
                <Button className={`${className} justify-self-end`}>Add</Button>
            </Form>
        </div>
    )
}

export default AddFriend;
