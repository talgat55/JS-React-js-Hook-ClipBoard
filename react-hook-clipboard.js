import React, { useState } from "react";

function useReactClipBoard(text = '') {
    const [stateClipBoard, setStateClipBoard] = useState(text);
    navigator.clipboard.writeText(stateClipBoard);
    return [stateClipBoard, setStateClipBoard];
}
export default useReactClipBoard;
