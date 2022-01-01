import { useEffect, useContext } from 'react';
import Spinner from '../layout/assets/spinner/Spinner';
import UserItem from './UserItem';

import GithubContext from '../context/github/GithubContext';

const UserList = () => {
    const {userResult, loading, getUsersResult} = useContext(GithubContext);

    // useEffect(() => {
    //     getUsersResult();
    // }, []);

    if(!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {userResult.map((user) => <UserItem key={user.id} user={user}/>)}
            </div>
        );
    } else {
        return (
            <div className='w-100 text-center mx-auto'>
                <Spinner />
            </div>
        );
    }
};

export default UserList;