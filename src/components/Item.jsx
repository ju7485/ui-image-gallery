import { useState } from "react"
import ImageForm from "./Form";

export default function ImageItem({index, file, desc, removeIndex, updateIndex}) {
    const [edit, setEdit] = useState(false);
    
    function editHandler(files, description) {
        updateIndex(index, files[0], description);
        setEdit(false);
    }

    return (
        <>
            { edit === false ? 
            <div>
                <img src={URL.createObjectURL(file)} alt="waiting..." />
                <p>{desc}</p>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <button type="" onClick={() => setEdit(true)}>Edit</button>
                    <button type="" onClick={() => removeIndex(index)}>Remove</button>
                </div>
            </div> : <>
                <ImageForm edit = {true} editHandler={editHandler}/>
            </>
            }
        </>
        
    )
}