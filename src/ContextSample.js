import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('dafault');

function Child() {
    const text = useContext(MyContext);
    return <div>hello {text}</div>
}
function Parent() {
    return <Child></Child>
}
function GrandParent() {
    return <Parent></Parent>
}
function ContextSample() {
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value={value ? 'good' : 'bad'}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>Click Me</button>
        </MyContext.Provider>
    );
}

export default ContextSample;