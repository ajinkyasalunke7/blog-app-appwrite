import React, { useState } from "react";
import service from "../Appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {}, []);
    service.getPosts(
        [].then((post) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    );

    return (
        <div className="w-full py-4">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPost;
