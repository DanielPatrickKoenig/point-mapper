import './PointPlacer.css';
import { mapToLines } from "../utils/lineMapping";
const PointPlacer = (props) => {
    const positionedPoint = (ratio) => {
        const position = mapToLines({ shape: props.shapes, ratio });
        return <circle cx={position.x} cy={position.y} r="2"></circle>
    }
    return <svg className="point-placer">
        {[...new Array(props.count).keys()].map(item => positionedPoint(item/props.count))}
    </svg>
}

export default PointPlacer;