import './ShapeList.css';
import ShapeEntry from './ShapeEntry';
const ShapeList = (props) => {
    const onShapeClicked = (e) => {
        if(props.onShapeSelected) props.onShapeSelected(Number(e.target.getAttribute('ndx')));
    };
    const onUpdateWeight = (weight) => {
        if(props.onUpdateWeight) props.onUpdateWeight(weight);
    };
    return <div className="shape-list">
        <ul>
            {props.shapes.map((item, index) => <li><button ndx={index} onClick={onShapeClicked}>{`Shape ${index}`}</button><ShapeEntry active={props.index === index} shape={item} onUpdateWeight={onUpdateWeight} /></li>)}
        </ul>
    </div>   
}

export default ShapeList