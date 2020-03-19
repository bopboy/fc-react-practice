import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = { name: '이름없음' };
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}Hello World {name}
            </div>
        );
    }
}

// import React from 'react'

// function Hello({ color, name, isSpecial }) {
//     console.log(isSpecial);
//     return (
//         <div style={{
//             color
//         }}>
//             {/* <b>{isSpecial ? '*' : '#'}</b> */}
//             {isSpecial && <b>*</b>}
//             Hello World {name}
//         </div >
//     );
// }

// Hello.defaultProps = {
//     name: 'no name'
// }
export default Hello;