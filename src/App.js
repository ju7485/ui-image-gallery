import logo from './logo.svg';
import './App.css';
import ImageForm from './components/Form';
import { useState } from 'react';
import ImageItem from './components/Item';

function App() {
  const [imageList, setImageList] = useState([]);

  function addFile(file, desc) {
    setImageList([...imageList, { file, desc }]);
  }

  function removeIndex(index) {
    setImageList(imageList.filter((ele, i) => i !== index));
  }

  function updateIndex(index, file, desc) {
    let newList = [...imageList];
    newList[index] = { file, desc };
    setImageList(newList);
  }

  return (
    <div className="App">
      <ImageForm addFile={addFile}/>
      <div id = "image-container">
        {
          imageList.map((ele, index) => {
            return (
              <ImageItem 
                key = {index} 
                index = {index} 
                file = {ele.file} 
                desc = {ele.desc} 
                removeIndex = {removeIndex}  
                updateIndex = {updateIndex}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
