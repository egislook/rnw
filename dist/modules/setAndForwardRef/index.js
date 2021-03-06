/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import * as React from 'react';

/**
 * This is a helper function for when a component needs to be able to forward a ref
 * to a child component, but still needs to have access to that component as part of
 * its implementation.
 *
 * Its main use case is in wrappers for native components.
 *
 * Usage:
 *
 *   function MyView(props) {
 *     const ref = useRef(null);
 *
 *     function setRef = setAndForwardRef({
 *       getForwardedRef: () => props.forwardedRef,
 *       setLocalRef: localRef => {
 *         ref.current = localRef;
 *       },
 *     });
 *
 *     return <View ref={setRef} />;
 *   }
 *
 *   const MyViewWithRef = React.forwardRef((props, ref) => (
 *     <MyView {...props} forwardedRef={ref} />
 *   ));
 */
export default function setAndForwardRef(_ref) {
  var getForwardedRef = _ref.getForwardedRef,
      setLocalRef = _ref.setLocalRef;
  return function forwardRef(ref) {
    var forwardedRef = getForwardedRef();
    setLocalRef(ref); // Forward to user ref prop (if one has been specified)

    if (typeof forwardedRef === 'function') {
      // Handle function-based refs. String-based refs are handled as functions.
      forwardedRef(ref);
    } else if (typeof forwardedRef === 'object' && forwardedRef != null) {
      // Handle createRef-based refs
      forwardedRef.current = ref;
    }
  };
}