import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
    const getAllUsers = async () => {
        const response = await axios.get(BASE_URL + "/users");
        console.log(response.data);
    };

    const getUserById = async (id) => {
        const response = await axios.get(BASE_URL + `/users/${id}`);
        console.log(response.data);
    };

    const createUser = async (newUser) => {
        const response = await axios.post(`${BASE_URL}/users`, newUser);

        console.log("Created User: ", response.data);
    };

    const updateUser = async (id, updatedUser) => {
        const response = await axios.put(
            `${BASE_URL}/users/${id}`,
            updatedUser
        );

        console.log("Updated user : ", response.data);
    };

    const deleteUser = async (id) => {
        const response = await axios.delete(`${BASE_URL}/users/${id}`);
        console.log("Deleted user : ", response.data);
    };

    useEffect(() => {
        getAllUsers();
        getUserById(1);
        const user = {
            username: "macar",
            password: "password",
        };
        createUser(user);

        const updatedUser = {
            "username": "osman1da",
            "password": "mark",
        };

        updateUser("3", updatedUser);

        deleteUser(3);
    }, []);

    return (
        <div>
            <div></div>
        </div>
    );
}

export default App;
