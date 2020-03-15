import React from 'react'

function Hello({ color, name, isSpecial }) {
    console.log(isSpecial);
    return (
        <div style={{
            color
        }}>
            {/* <b>{isSpecial ? '*' : '#'}</b> */}
            {isSpecial && <b>*</b>}
            Hello World {name}
        </div >
    );
}

Hello.defaultProps = {
    name: 'no name'
}
export default Hello;