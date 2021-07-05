import React from 'react'

import classes from './Card.module.css'

const Card: React.FC<{width: string}>= (props) => {
    return (
        <div className={classes.card} style={{width: props.width}}>
            {props.children}
        </div>
    )
}

export default Card
