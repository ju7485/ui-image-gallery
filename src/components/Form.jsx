import { useState } from "react";

export default function ImageForm({addFile, edit = false, editHandler = null}) {
    function submitForm(event) {
        event.preventDefault();
        console.log('Form submitted');
        let files = event.target.image.files;
        let description = event.target.description.value;
        if(edit) {
            editHandler(files, description);
        }
        else {
            addFile(files[0], description);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <label htmlFor="image">Upload Photo</label>
                    <input type="file" id="image" name="image" accept="image/*" />
                </div>
                <div>
                    <label htmlFor="image">Description</label>
                    <textarea rows="4" cols="50" name="description"></textarea>
                </div>
                <button type="submit">
                    {edit ? 'Edit' : 'Add'} Photo
                </button>
            </form>
            {/* <img src={imageSrc} alt="waiting..." /> */}
        </div>
    )
}