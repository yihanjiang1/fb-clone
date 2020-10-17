import React,{useState,useEffect} from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';


function Feed() {
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot=>
            setPosts(snapshot.docs.map((doc)=>({id: doc.id, data:doc.data()})))
        );
        },[]);
    return (
        <div className='feed'>
            <StoryReel></StoryReel>
            <MessageSender></MessageSender>
            {posts.map((post)=>(
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />


            ))}
            {/* <Post 
                profilePic={Sefie} 
                message='This works'
                timestamp=' THIS IS A TIMESTAMP'
                username='Yihan Jiang'
                image='http://www.pptbz.com/pptpic/UploadFiles_6909/201105/2011052107152074.jpg'
            />
            <Post 
                profilePic={Sefie} 
                message='This works'
                timestamp=' THIS IS A TIMESTAMP'
                username='Yihan Jiang'
                image='http://www.pptbz.com/pptpic/UploadFiles_6909/201105/2011052107152074.jpg'
            /> */}


        </div>
    )
}

export default Feed
