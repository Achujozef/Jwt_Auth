import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "features/user";

// UserList component (updated based on previous code)

const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.userList);
  
    useEffect(() => {
      dispatch(fetchUserList());
    }, [dispatch]);
  
    if (!userList) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>User List</h2>
        {userList.map((user) => (
          <div key={user.email}>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default UserList;
  