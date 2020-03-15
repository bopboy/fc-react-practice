import React, { useEffect } from 'react'

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
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
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span> ({email})</span>
            <button onClick={() => onRemove(id)}>delete</button>
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
                            onRemove={onRemove}
                            onToggle={onToggle}
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