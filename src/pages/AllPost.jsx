import React, { useState, useEffect } from "react";
import service from "../Appwrite/config";
import { Container, PostCard } from "../components";

function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Use an async function inside useEffect
        const fetchPosts = async () => {
            try {
                // Assuming service.getPosts returns a Promise
                const post = await service.getPosts([]);
                if (post) {
                    setPosts(post.documents);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        // Call the async function
        fetchPosts();
    }, []); // Pass an empty dependency array to run this effect only once on mount

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
