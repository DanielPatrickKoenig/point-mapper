const ShapeEntry = (props) => {
    return <div style={{display: props.active ? 'block' : 'none'}}>
        <h3>Start</h3>
        <p>x {props.shape.start.x}</p>
        <p>y {props.shape.start.y}</p>
        <h3>Control Point 1</h3>
        <p>x {props.shape.cp1.x}</p>
        <p>y {props.shape.cp1.y}</p>
        <h3>Control Point 2</h3>
        <p>x {props.shape.cp2.x}</p>
        <p>y {props.shape.cp2.y}</p>
        <h3>End</h3>
        <p>x {props.shape.end.x}</p>
        <p>y {props.shape.end.y}</p>
    </div>
}

export default ShapeEntry;