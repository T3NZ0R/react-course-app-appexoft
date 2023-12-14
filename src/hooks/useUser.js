import {useParams} from "react-router-dom";
import {useCallback, useEffect, useMemo, useState} from "react";
import {userService} from "../Services/user.service";

export function useUser() {

    let {id} = useParams();

    const [user, setUser] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const [createUserStatus, setCreateUserStatus] = useState(null)

    useEffect(() => {
        userService.getUser(id).then(value => setUser(value))
    }, [id]);

    useEffect(() => {
        userService.getUserPosts(id).then(value => setUserPosts(value))
    }, [id]);

    const createPost = useCallback(() => {
        userService.createUserPosts(id).then(response => setCreateUserStatus(response))
    }, [id]);

    return useMemo(() => ({user, userPosts, createPost, createUserStatus}), [user, userPosts, createPost, createUserStatus])
}
