function ratioPoint (ratio, a, b) {
    return { x: a.x + ((b.x - a.x) * ratio), y: a.y + ((b.y - a.y) * ratio) };
}
function cubicBezier (ratio, startPoint, controlPoint1, controlPoint2, endPoint) {
    const startToControlPoint1 = ratioPoint(ratio, startPoint, controlPoint1);
    const controlPoint1ToEnd = ratioPoint(ratio, controlPoint2, endPoint);
    const controlPoint1toControlPoint2 = ratioPoint(ratio, controlPoint1, controlPoint2);

    const startToC1ToC1ToC2 = ratioPoint(ratio, startToControlPoint1, controlPoint1toControlPoint2);
    const c1ToC2ToC2ToEnd = ratioPoint(ratio, controlPoint1toControlPoint2, controlPoint1ToEnd);

    return ratioPoint(ratio, startToC1ToC1ToC2, c1ToC2ToC2ToEnd);
}

function getWeightTotal(shape){
    let tally = 0;
    shape.forEach(item => {
        tally += item.weight;
    })
    return tally;
}

function mapToLines({ shape, ratio }){
    const weightTotal = getWeightTotal(shape);
    const weightMod = 1 / weightTotal;
    const weights = shape.map(item => item.weight * weightMod);
    weights.forEach((item, index) => {
        if(index > 0) weights[index] += weights[index-1];
    });
    const shapeChunkIndex = weights.map((item, index) => ({ item, index })).filter(item => ratio < item.item)[0].index;
    const lastWeight = weights[shapeChunkIndex - 1] ? weights[shapeChunkIndex - 1] : 0;
    const refactoredRatio = (ratio - lastWeight) / (shape[shapeChunkIndex].weight * weightMod);
    return cubicBezier(refactoredRatio, shape[shapeChunkIndex].start, shape[shapeChunkIndex].cp1, shape[shapeChunkIndex].cp2, shape[shapeChunkIndex].end);
}

export { mapToLines }