
import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onAddPost, onSave, existingPost, apiUrl }) => {

    const allTags = ['html', 'css', 'js', 'php'];
    const [selectedTags, setSelectedTags] = useState([]);


    const ChangeTag = (tag, isChecked) => {
        if (isChecked) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        }
    };


    const [newPost, setNewPost] = useState({
        title: '',
        image: '',
        content: '',
        tags: [],
        published: false,
    });

    const Change = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "published" && checked) {
            alert('Stai per pubblicare questo articolo.');
        } if (type === "checkbox") {
            setNewPost({ ...newPost, [name]: checked });
        } else {
            setNewPost({ ...newPost, [name]: value });
        }
    };

    const Submit = async (e) => {
        e.preventDefault();

        if (!newPost.title || !newPost.image || !newPost.content) {
            alert('Compila tutti i campi');
            return;
        }

        const postData = { ...newPost, tags: selectedTags };
        const method = existingPost ? "PUT" : "POST";
        const url = existingPost ? `${apiUrl}/${existingPost.id}` : apiUrl;

        try {
            const response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error(`Errore HTTP: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
            onClose();
        } catch (error) {
            console.error("Errore durante la richiesta:", error);
            alert("Si è verificato un errore durante l'invio del post.");
        }
    };



    useEffect(() => {
        /* console.log(existingPost); */
        if (existingPost) {
            setSelectedTags(existingPost.tags.map(tag => tag.name));
            /* console.log(existingPost.tags.map(tag => tag.name)); */
            setNewPost({
                title: existingPost.title || '',
                image: existingPost.image || '',
                content: existingPost.content || '',
                /*  tags: Array.isArray(existingPost.tags) ? existingPost.tags.join(', ') : '', */
                published: existingPost.hasOwnProperty('published') ? existingPost.published : true,
            });
        } else {
            /*  console.log(existingPost); */
            setSelectedTags([]);
            setNewPost({
                title: '',
                image: '',
                content: '',
                /*   tags: '', */
                published: false,
            });
        }
    }, [existingPost]);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <button className="mb-4 text-gray-600 hover:text-gray-800" onClick={onClose}>Chiudi</button>
                <form onSubmit={Submit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titolo</label>
                        <input type="text" id="title" name="title" value={newPost.title} onChange={Change} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-gray-500 focus:border-gray-500" />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Immagine URL</label>
                        <input type="text" id="image" name="image" value={newPost.image} onChange={Change} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-gray-500 focus:border-gray-500" />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenuto</label>
                        <textarea id="content" name="content" value={newPost.content} onChange={Change} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-gray-500 focus:border-gray-500" rows="3"></textarea>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 pb-2">Seleziona i Tags</label>
                            <div className="flex flex-wrap gap-2">
                                {allTags.map(tag => (
                                    <label key={tag} className="flex items-center text-sm font-medium text-gray-700 my-2">
                                        <input
                                            type="checkbox"
                                            className='h-4 w-4 accent-gray-500 focus:ring-gray-500 border-gray-300 rounded mr-2'
                                            checked={selectedTags.includes(tag)}
                                            onChange={(e) => ChangeTag(tag, e.target.checked)}
                                        />
                                        {tag.toLocaleUpperCase()}
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="published" name="published" checked={newPost.published} onChange={Change} className="h-4 w-4 accent-gray-500 focus:ring-gray-500 border-gray-300 rounded" />
                        <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Pubblicato</label>
                    </div>

                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            {existingPost ? 'Salva le modifiche' : 'Aggiungi Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;