/**
 * @param {Array} root
 * @returns {Array} Child component instances with webtrekk property
 */
const childObductor = (root) => {
    const flatten = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
    const allChildren = [];
    const getChild = el => {
        if (el.$children.length > 0) {
            allChildren.push([...el.$children]);
            el.$children.forEach(newEl => {
                getChild(newEl);
            });
        }
    };
    getChild(root);
    return flatten(allChildren).filter((child) => child.webtrekk);
};

export {childObductor};
