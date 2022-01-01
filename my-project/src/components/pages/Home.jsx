import UserList from '../users/UserList';
import SearchUser from '../users/SearchUser';

const Home = () => {
    return (
        <div>
            <SearchUser />
            <UserList />
        </div>
    );
};

export default Home;