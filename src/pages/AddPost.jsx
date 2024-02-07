import { PostForm as PostFormComponent } from "../components";
import { Container } from "../components";
function AddPost() {
    return (
        <div className="py-8">
            <Container>
                <PostFormComponent />
            </Container>
        </div>
    );
}

export default AddPost;
