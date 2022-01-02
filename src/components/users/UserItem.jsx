import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <div className='card shadow-md side bg-base-100 hover:bg-base-300'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div className='avatar'>
                    <div className='rounded-full shadow w-14 h-14'>
                        <img src={avatar_url} alt="User avatar" />
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <Link to={`/users/${login}`} className='text-base-content text-opacity-40'>
                        Viev Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserItem;