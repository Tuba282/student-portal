import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaUserCircle } from 'react-icons/fa';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Profile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getuser = localStorage.getItem("user");
    const userObject = JSON.parse(getuser);

    const [isEditing, setIsEditing] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: userObject?.name || '',
        password: userObject?.password || ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleUpdate = () => {
        localStorage.setItem("user", JSON.stringify(formData));
        setIsEditing(false);
        handleClose();
    };
    const enableEdit = () => setIsEditing(true);



    return (
        <div>
            <button
                className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                onClick={handleOpen}
            >
                <span className="material-icons"><FaUserCircle className="text-[var(--green)] text-lg" /></span>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='bg-transparent!'
            >
                <Box sx={style}>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <FaUserCircle className="w-24 h-24 rounded-full text-[var(--green)] border-2 border-[var(--borderColor)] shadow-md" />

                        <div className='flex flex-col items-center text-center'>
                            <input
                                className={`text-xl p-2 text-center my-1 font-semibold text-gray-800`}
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                readOnly={!isEditing}
                            />
                            <input
                                className={`text-sm p-2  text-center text-gray-500`}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                type="text"
                                readOnly={!isEditing}
                            />
                            {!isEditing ? (
                                <button
                                    className="mt-4 px-4 py-2 bg-[var(--green)] text-white rounded-md hover:bg-[var(--green)]/70 transition duration-200"
                                    onClick={enableEdit}
                                >
                                    Edit Profile
                                </button>
                            ) : (
                                <button
                                    className="mt-4 px-4 py-2 bg-[var(--green)] text-white rounded-md hover:bg-[var(--green)]/70 transition duration-200"
                                    onClick={handleUpdate}
                                >
                                    Save Changes
                                </button>)}
                        </div>
                    </div>
                </Box>

            </Modal>
        </div>
    );
}
