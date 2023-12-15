import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [posting, setPosting] = useState({title: '', body: '', });
    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...posting, id: Date.now()
        }
        create(newPost);
        setPosting({title: '', body: ''});
    }
    return (
        <form>
            {/*Управляемый компонент */}
            <MyInput
                value={posting.title}
                onChange={event =>  setPosting({...posting, title: event.target.value})}
                type="text"
                placeholder='Header'
            />
            {/*Неуправляемый компонент*/} {/*useRef*/}
            <MyInput
                value={posting.body}
                onChange={event => setPosting({...posting, body: event.target.value})}
                type="text"
                placeholder='Description'
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;
