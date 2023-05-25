const ShapeEntry = (props) => {
    const onWeightCHange = (e) => {
        const newVal = isNaN(e.target.value) || Number(e.target.value) < 1 ? 1 : e.target.value;
        if(props.onUpdateWeight) props.onUpdateWeight(newVal);
    }
    return <div style={{display: props.active ? 'block' : 'none'}}>
        <label>Start</label>
        <p>x {props.shape.start.x}</p>
        <p>y {props.shape.start.y}</p>
        <label>Control Point 1</label>
        <p>x {props.shape.cp1.x}</p>
        <p>y {props.shape.cp1.y}</p>
        <label>Control Point 2</label>
        <p>x {props.shape.cp2.x}</p>
        <p>y {props.shape.cp2.y}</p>
        <label>End</label>
        <p>x {props.shape.end.x}</p>
        <p>y {props.shape.end.y}</p>
        <label>Weigh: <input type="number" value={props.shape.weight} onChange={onWeightCHange} /></label>
    </div>
}

export default ShapeEntry;