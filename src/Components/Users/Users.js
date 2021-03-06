import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize,
                 users, followingInProgress, unfollow, follow}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u}
                                  followingInProgress={followingInProgress}
                                  unfollow={unfollow}
                                  follow={follow}
                                  key={u.id}/>
            )}
        </div>

    </div>
}

export default Users;