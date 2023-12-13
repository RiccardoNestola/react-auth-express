import React from 'react';
import CardInfo from './CardInfo';


const Card = ({ post, onDelete, onEdit }) => {


    return (
        <>
            {post.published && <CardInfo post={post} onDelete={onDelete} onEdit={onEdit} />}
        </>
    )
}



export default Card