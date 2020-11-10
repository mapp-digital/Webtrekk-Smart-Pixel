import React from 'react';

// polyfill for react v15
export const createRef = React.createRef || function() {
    function getRef(refObject) {
        if (!refObject) {
            return null;
        }

        let reference = refObject;

        if (Object.keys(reference).length === 1) {
            if (reference.hasOwnProperty('current')) {
                reference = reference.current;
            }
            else if (reference.hasOwnProperty('value')) {
                reference = reference.value;
            }
        }

        return reference;
    }

    function ref(instanceOrNode) {
        ref.current = getRef(instanceOrNode) || null;
    }

    ref.current = null;

    return ref;
};

export default {
    // polyfill for react v15
    createRef
};
