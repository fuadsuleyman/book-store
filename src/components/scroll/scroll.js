import React from 'react';


const Scroll = (props) => {
    return (
        <div className='scroll' style={{ overflowY: 'scroll', height: '800px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;