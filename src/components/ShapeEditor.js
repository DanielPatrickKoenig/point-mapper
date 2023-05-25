import './ShapeEditor.css';
import ShapePoint from './ShapePoint';
const SHapeEditor = (props) => {
    const onDragStarted = (id) => {
        if(props.onStartEditing) props.onStartEditing(id);
        console.log(id);
    }
    return <svg className={props.active ? 'shape-editor' : 'shape-editor inactive-editor'}>
        <ShapePoint position={props.shape.start} onStartDrag={onDragStarted} point="start" />
        <ShapePoint position={props.shape.cp1} onStartDrag={onDragStarted} point="cp1" />
        <ShapePoint position={props.shape.cp2} onStartDrag={onDragStarted} point="cp2" />
        <ShapePoint position={props.shape.end} onStartDrag={onDragStarted} point="end" />
        <path d={`M${props.shape.start.x} ${props.shape.start.y} C${props.shape.cp1.x} ${props.shape.cp1.y} ${props.shape.cp2.x} ${props.shape.cp2.y} ${props.shape.end.x} ${props.shape.end.y}`}></path>
    </svg>
};

export default SHapeEditor;