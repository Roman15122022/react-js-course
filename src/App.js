import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedPost = useMemo(() => {
        console.log(1)
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() =>{
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query));
    },[filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    //Получаем пост из дочернего компонента
    const removePost = (postId) => {
        setPosts(posts.filter(item => item.id !== postId))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about Js'/>
        </div>
    );
}

export default App;
