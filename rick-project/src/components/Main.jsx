import "./Main.css"
import { Rick } from "./Rick"; 
import { RickLoc } from "./RickLoc"; 
import { EpisodeList } from "./presentational/EpisodeList"; 
import { LocList } from "./presentational/LocList"; 
import React, { useState } from 'react';

export const Main = () => {

     // Создаем состояние для хранения элементов
     const [elements, setElements] = useState([]);
     const [elements2, setElements2] = useState([]);
     const [buttonVisible, setButtonVisible] = useState(true); // Состояние для показа кнопки
     const [buttonVisible2, setButtonVisible2] = useState(true); // Состояние для показа кнопки
     // Функция для добавления нового элемента
     const addElement = () => {
         const newElement = `Элемент ${elements.length + 1}`;
         setElements([...elements, newElement]); // Обновляем состояние
         setButtonVisible(false); // Скрываем кнопку после добавления элемента
         //setButtonVisible2(false); // Скрываем кнопку после добавления элемента
     };
     const addElement2 = () => {
         const newElement2 = `Элемент ${elements2.length + 1}`;
         setElements2([...elements2, newElement2]); // Обновляем состояние
         //setButtonVisible(false); // Скрываем кнопку после добавления элемента
         setButtonVisible2(false); // Скрываем кнопку после добавления элемента
  };
 
     return (
         <div>
             {buttonVisible && <button className="MainButton" onClick={addElement}>Episodes!</button>}
             <div>
                 {elements.map((element, index) => (
                     <EpisodeList />
                 ))}
             </div>
             {buttonVisible2 && <button className="MainButton" onClick={addElement2}>Locations!</button>}
             <div>
                 {elements2.map((element2, index2) => (
                     <LocList />// открывает локации!
                 ))}
             </div>
     
         </div>
     );
};
export default Main;