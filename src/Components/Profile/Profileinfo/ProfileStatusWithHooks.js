import React, {useState,useEffect} from 'react';
import s from './Profileinfo.module.css';


const ProfileStatusWithHooks = (props) =>{
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () =>{
        setStatus(false);
        props.updateStatus(status);
    }

    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "Введите свой статус!"}</span>
                </div>
                }

                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={deactivateEditMode} value={status}/>
                </div>
                }
            </div>
        )
    }

export default ProfileStatusWithHooks;