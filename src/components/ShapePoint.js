import './ShapePoint';
const ShapePoint = (props) => {
    const mouseDown = (e) => {
        if(props.onStartDrag) props.onStartDrag(e.target.getAttribute('point'));
    }
    return <circle 
        className="shape-point" 
        cx={props.position.x}
        cy={props.position.y}
        r="10"
        point={props.point}
        onMouseDown={mouseDown}
    >

    </circle>
}

export default ShapePoint;