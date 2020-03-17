import React, { useEffect, useContext } from 'react'
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        console.log('컴포넌트 나타남');
        console.log(user);
        return () => {
            console.log('컴포넌트 사라짐');
            console.log(user);
        }
    }, [user]);
    return (
        <div>
            <b style={{
                background: active ? 'yellow' : 'white',
                cursor: 'pointer'
            }}
                onClick={() => dispatch({
                    type: 'TOGGLE_USER',
                    id
                })}
            >
                {username}
            </b>
            &nbsp;
            <span> ({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>delete</button>
        </div >
    )
});
function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    user => (
                        <User
                            user={user}
                            key={user.id}
                        />)
                )
            }
        </div>
    )
}
export default React.memo(
    UserList,
    (prevProps, nextProps) => nextProps.user === prevProps.users
);