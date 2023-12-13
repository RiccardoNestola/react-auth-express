import React from 'react';
import { useState } from 'react';

const TagColor = {
    "html": "bg-red-500",
    "css": "bg-blue-500",
    "js": "bg-yellow-500",
    "php": "bg-violet-500"
};

const CardInfo = ({ post, onDelete, onEdit }) => {


    const { id, image, tags, title, content } = post;

    const defaultImageUrl = 'https://placehold.co/600x400';
    const [imageUrl, setImageUrl] = useState(post.image || defaultImageUrl);

    const handleImageError = () => {
        setImageUrl(defaultImageUrl);
    };



    return (

        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt={title} onError={handleImageError} />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {tags.flatMap(tag => tag.name.split(',').map(singleTag => (
                            <span key={`${tag.id}-${singleTag}`} className={`${TagColor[singleTag.trim()] || 'bg-gray-500'} mr-2 p-1 rounded text-white`}>
                                {singleTag.trim()}
                            </span>
                        )))}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{content}</p>
                    <div className="flex items-center flex-wrap ">
                        <a href="/learn-more" className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più</a>
                    </div>

                    <button onClick={() => onEdit(post)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-2">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>

                    </button>

                    <button onClick={() => onDelete(id)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-2 mx-4">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

    );
};

export default CardInfo;
