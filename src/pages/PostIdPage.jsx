import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.postId);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.postId);
        setComment(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>The page with the post id: {params.postId}</h1>
            {isLoading
                ? <Loader/>
                : (
                    <>
                        <div>{post.title}</div>
                        <div>{post.body}</div>
                    </>
                )
            }
            <h1>Comments</h1>
            {isLoading
                ? <Loader/>
                : (
                    <>
                        {comment.map(comment => (
                            <div style={{marginTop: '25px'}}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        ))}
                    </>
                )
            }
        </div>
    );
};

export default PostIdPage;
