import Friends from './components/Friends'
import { initialFriends } from './assets/data'
import { useState } from 'react'
import Bill from './components/Bill'

const App = () => {
    const [addingFriend, setAddingFriend] = useState(false)
    const [friendsList, setFriendsList] = useState(initialFriends)
    const [selectedFriend, setSelectedFriend] = useState(null)

    const className =
        'rounded-lg p-1 bg-slate-600 min-w-20  text-slate-300 font-semibold '

    const addFriendHandler = () => {
        setAddingFriend((adding) => !adding)
        setSelectedFriend((selfrn) => !selfrn)
    }

    const handleSplit = (value) => {
        console.log(value)
        setFriendsList((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        )
        // reset selected friend
        setSelectedFriend(null)
    }

    const handleFriendSelection = (friend) => {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend
        )
        // reset the state of adding friend to false to close the form
        setAddingFriend(false)
    }

    // handleAdd friend function
    const modifyFriendsList = (friend) => {
        setFriendsList((prevFriendsList) => [...prevFriendsList, friend])
        // reset the state of adding friend to false to close the form
        setAddingFriend(false)
    }

    return (
        <div className="flex justify-center items-center gap-20 flex-wrap h-screen bg-slate-500  ">
            <div>
                <div className="flex justify-center items-center ">
                    <Friends
                        friendsList={friendsList}
                        className={className}
                        addingFriend={addingFriend}
                        onAddFriend={addFriendHandler}
                        onModifyFriendsList={modifyFriendsList}
                        onSelect={handleFriendSelection}
                        selectedFriend={selectedFriend}
                    />
                </div>
            </div>
            {selectedFriend && (
                <Bill
                    className={className}
                    selectedFriend={selectedFriend}
                    onSplit={handleSplit}
                />
            )}
        </div>
    )
}

export default App
