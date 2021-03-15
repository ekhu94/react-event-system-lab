import React from 'react';

class EyesOnMe extends React.Component {
    render() {
        return (
            <button
                onFocus={() => console.log('Good!')}
                onBlur={() => console.log('Hey! Eyes on me!')}
            >
                Hi Curriculum Team. Fix this lab.
            </button>
        );
    }
}

export default EyesOnMe;