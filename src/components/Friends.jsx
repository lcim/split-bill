import Friend from './Friend'
import AddFriend from './AddFriend'
import Button from './Button'

const Friends = ({
    friendsList,
    className,
    addingFriend,
    onAddFriend,
    onModifyFriendsList,
    onSelect,
    selectedFriend,
}) => {
    return (
        <main className=" bg-slate-300 min-h-96 items-center justify-center p-3 rounded-lg flex flex-col ">
            <h2 className="text-center font-bold pb-3 text-xl  ">
                My Friend&apos;s List
            </h2>
            <div>
                {friendsList?.map((friend) => (
                    <Friend
                        friend={friend}
                        key={friend.id}
                        id={friend.id}
                        fname={friend.fname}
                        balance={friend.balance}
                        avatarSRC={friend.image}
                        className={className}
                        onSelect={onSelect}
                        selectedFriend={selectedFriend}
                    />
                ))}
            </div>
            {addingFriend && (
                <div>
                    <AddFriend
                        friendsList={friendsList}
                        onModifyFriendsList={onModifyFriendsList}
                        className={className}
                    />
                </div>
            )}
            <Button
                onAddFriend={onAddFriend}
                className={`${className} mt-12 p-1   text-lg self-end w-28`}
            >
                {addingFriend ? 'Close' : 'Add Friend'}
            </Button>
        </main>
    )
}

export default Friends
