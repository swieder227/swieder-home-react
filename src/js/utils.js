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

export function detectIsMobile(){
    if(detectIsNode()){
        console.error("Trying to detect mobile on server-side");
    } else {
        if(window.innerWidth < 768){
            return true;
        } else {
            return false;
        }
    }
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

/*
** Data Manipulation
*/
export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/*
** Utility fns
*/
export function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};