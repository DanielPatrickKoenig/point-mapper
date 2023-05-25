
import './App.css';
import ShapeEditor from './components/ShapeEditor';
import ShapeList from './components/ShapeList';
import PointPlacer from './components/PointPlacer';
import { useState } from 'react';

function App() {
  const [shapes, setShapes] = useState([]);
  const [property, setProperty] = useState('');
  const [editLayerDisplay, setEditLayerDisplay] = useState('none');
  const [shapeIndex, setShapeIndex] = useState(0);

  const addChapeCliked = () => {
    addShape(baseShape);
  };

  const addShape = ({ start, cp1, cp2, end }) => {
    const newShapes = [...shapes];
    newShapes.push({ start, cp1, cp2, end, weight: 1 });
    setShapes(newShapes);
  }
  const startEditing = (id) => {
    setProperty(id);
    setEditLayerDisplay('block');
  }
  const mouseMoved = (e) => {

    const newShapes = [...shapes];
    newShapes[shapeIndex][property].x = e.pageX;
    newShapes[shapeIndex][property].y = e.pageY;
    setShapes(newShapes);

  }
  const endEditing = () => {
    setEditLayerDisplay('none');

  }
  const shapeSelected = (index) => {
    setShapeIndex(index);
  }
  const onUpdateWeight = (weight) => {
    const newShapes = [...shapes];
    newShapes[shapeIndex].weight = Number(weight);
    setShapes(newShapes);
  }
  const baseShape = {
    start: {x: 10, y: 10},
    cp1: {x: 300, y: 10},
    cp2: {x: 10, y: 300},
    end: {x: 300, y: 300},
    weight: 1
  }
  return (
    <div className="App">
      <div className="shape-container">
        {shapes.length ? <PointPlacer count={300} shapes={shapes} /> : ''}
        {shapes.map((item, index) => <ShapeEditor shape={item} onStartEditing={startEditing} active={index === shapeIndex} />)} 
        <div className="drag-layer" style={{display: editLayerDisplay}} onMouseMove={mouseMoved} onMouseUp={endEditing}></div>
      </div>
      <p>{property}</p>
      <div className="util-nav">
        <button onClick={addChapeCliked}>Add Shape</button>
      </div>
      <ShapeList onShapeSelected={shapeSelected} onUpdateWeight={onUpdateWeight} shapes={shapes} index={shapeIndex} />
    </div>
  );
}

export default App;
