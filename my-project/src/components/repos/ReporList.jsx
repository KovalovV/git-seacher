import { useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import ReposItem from './ReposItem';

const ReposList = () => {
    const {userRepos} = useContext(GithubContext);

    return (
        <div className='w-full p-3 mb-6 rounded-lg shadow-md bg-base-100'>
            {userRepos.map((repo) => <ReposItem key={repo.id} repo={repo} />)}
        </div>
    );
};

export default ReposList;