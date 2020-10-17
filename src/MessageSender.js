import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider'
import firebase from 'firebase';
import db from './firebase'
function MessageSender() {
    const[input,setInput]= useState('');
    const[imageUrl,setImageUrl]= useState('');
    const [{user}, dispatch]= useStateValue();


    const handleSubmit = e =>{
        e.preventDefault();
        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });
        setInput('');
        setImageUrl('');
    }
    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar  src={user.photoURL}></Avatar>              
                <form action="">
                    <input
                        value={input}
                        onChange={e=>setInput(e.target.value)} 
                        className='messageSender_input' type="text" placeholder={'What`s on your mind ?'}/>    
                    <input 
                        value={imageUrl}
                        onChange={e=>setImageUrl(e.target.value)}
                        placeholder='image URL (Optional)' type="text"/>    
                    <button onClick={handleSubmit} type ='submit'>  Hidden submit</button>
                </form>  
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:'red'}}></VideocamIcon>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:'green'}}></PhotoLibraryIcon>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:'orange'}}></InsertEmoticonIcon>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>




        </div>
    )
}

export default MessageSender
