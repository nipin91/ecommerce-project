import { Route, Routes } from "react-router-dom";
import CommentDetails from "./view/comment-details";
import Posts from "./view/posts";
import User from "./view/user";


const AppRoute = () => {
    return <Routes>
        <Route path="/" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comment-details/:id" element={<CommentDetails />} />
    </Routes>
}


export default AppRoute; 