/*
** Env endpoints
*/
export const NODE_ENV = detectIsNode() ? process.env.NODE_ENV : window._env.NODE_ENV;

/*
** Detection
*/
export function detectIsNode() {
  return typeof window === "undefined"
}

/*
** DOM Positioning
*/
export function getPositionAtCenter(element) {
    var data = element.getBoundingClientRect();
    return {
        x: data.left + data.width / 2,
        y: data.top + data.height / 2
    };
};

export function getDistanceBetweenElements(a, b) {
    var aPosition = getPositionAtCenter(a);
    var bPosition = getPositionAtCenter(b);

    return Math.sqrt(
        Math.pow(aPosition.x - bPosition.x, 2) + 
        Math.pow(aPosition.y - bPosition.y, 2) 
    );
};