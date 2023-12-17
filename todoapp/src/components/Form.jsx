import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function Form() {
    const [formData, setFormData] = useState('');
    const [todoData, setTodoData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [editid, setEditid] = useState(null);
    const [btncontent, setBtnContent] = useState("Submit")

    const submitClicked = () => {
        if (formData) {
            if (toggle) {
                setTodoData((prevTodos) =>
                    prevTodos.map((element) =>
                        element.id === editid ? { ...element, description: formData } : element
                    )
                );
                setToggle(false);
                setBtnContent("Submit")
                setEditid(null); 
            } else {
                setTodoData((prevTodos) => [
                    ...prevTodos,
                    { id: Date.now(), description: formData },
                ]);
            }
            setFormData('');
        }
    };

    const deleteHandle = (thatid) => {
        setTodoData((prevTodo) => prevTodo.filter((current) => current.id !== thatid));
        setFormData('');
        setToggle(false); 
        setBtnContent("Submit")
        setEditid(null); 
    };

    const editHandle = (currentid, currentdes) => {
        setFormData(currentdes);
        setToggle(true);
        setBtnContent("Update")
        setEditid(currentid);
    };

  

    return (
        <div className="mt-[50px] py-[10px] px-[10px] bg-[#67729D] shadow-md rounded w-[450px] h-[500px] overflow-y-auto overflow-x-hidden">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitClicked();
                }}
                className="w-full flex items-center sticky z-10 top-0 left-0"
            >
                <input
                    type="text"
                    placeholder="Enter to do descriptions"
                    value={formData}
                    className="w-[70%] mt-[20px py-[7px] px-[8px] outline-none"
                    onChange={(e) => {
                        setFormData(e.target.value);
                    }}
                />
                <button
                    onClick={submitClicked}
                    className="py-[7px] px-[8px] outline-none bg-[#E7BCDE] w-[30%]"
                >
                    {btncontent}
                </button>
            </form>
            <div className="content mt-[20px]">
                {todoData.map((each) => (
                    <div
                        className="flex justify-between bg-yellow-200 text-black w-full py-2 m-1 px-4"
                        key={each.id}
                    >
                        {each.description}
                        <div>
                            <IconButton onClick={() => editHandle(each.id, each.description)}>
                                <EditIcon className="text-black" />
                            </IconButton>
                            <IconButton onClick={() => deleteHandle(each.id)}>
                                <DeleteIcon className="text-black" />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Form;
