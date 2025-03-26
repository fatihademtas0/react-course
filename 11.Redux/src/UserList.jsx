import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./Redux/userSlice";
import User from "./Redux/User";

function UserList() {
    const dispatch = useDispatch();

    const { users } = useSelector((store) => store.user);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            <div>
                {users &&
                    users.map((user) => <User key={user.id} user={user} />)}
            </div>
        </div>
    );
}

export default UserList;
