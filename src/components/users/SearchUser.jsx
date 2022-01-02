import { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContex';

const SearchUser = () => {
    const [text, setText] = useState('');

    const { userResult, searchUsers, handleClear } = useContext(GithubContext);
    const { alert, setAlert } = useContext(AlertContext);

    const handleChange = (event) => setText(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!text.length) {
            setAlert('Please, enter some text to field.', 'error');
        } else {
            searchUsers(text);
        }

        setText('');
    };

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <div className='relative'>
                        <input
                            onChange={handleChange}
                            value={text}
                            type="text"
                            placeholder='Some text'
                            className='w-full pr-40 bg-gray-200 input input-lg text-black' />
                        <button
                            type='submit'
                            className='absolute top-0 right-0 w-36 rounded-l-none btn btn-lg'>
                            find
                        </button>
                    </div>
                </div>
            </form>
            {Boolean(userResult.length) && (
                <button
                    className='btn btn-large btn-ghost'
                    onClick={handleClear}>
                    clear
                </button>
            )}
        </div>
    );
};

export default SearchUser;