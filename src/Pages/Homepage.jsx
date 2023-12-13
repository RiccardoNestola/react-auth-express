import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel/Carousel';
import images from '../data/images';
import Modal from '../Components/Modal/Modal';
import CardList from '../Components/Cards/CardList';
import Header from '../Components/Header/Header';


const Homepage = () => {

    async function getPosts() {
        const response = await fetch('http://localhost:3005/posts/');
        const data = await response.json();
        setPosts(data);
        console.log(data);
    }

    useEffect(() => {
        getPosts();
    }, []);


    const [posts, setPosts] = useState([]);
    const [postToEdit, setPostToEdit] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    };


    const closeModal = () => {
        setModalOpen(false);
        setPostToEdit(null);
    };


    const addPost = (newPost) => {
        const uniqueId = crypto.randomUUID();
        const postToAdd = { ...newPost, id: uniqueId };
        setPosts([...posts, postToAdd]);
    };


    const deletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        if (window.confirm('Sei sicuro di voler eliminare questo post?'))
            setPosts(updatedPosts);

    };


    const openEditModal = (post) => {
        /*  console.log(post); */
        setPostToEdit(post);
        setModalOpen(true);
    };

    const editPost = (postId, updatedData) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, ...updatedData };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    return (
        <>
            <Header onOpenModal={openModal} />
            <Carousel images={images} />
            <Modal isOpen={isModalOpen} onClose={() => { setModalOpen(false); setPostToEdit(null); }} onAddPost={addPost} onSave={editPost} existingPost={postToEdit} apiUrl="http://localhost:3005/posts/" />
            <CardList posts={posts} onDeletePost={deletePost} onEditPost={openEditModal} />
        </>
    )
}

export default Homepage