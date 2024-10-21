import useStudioStore, { StudioState } from '@/stores/studio';
import { useState, useEffect, useRef, useCallback } from 'react';

function useDraggable(ref: React.RefObject<HTMLDivElement>, parentRef: React.RefObject<HTMLDivElement>) {
  const pos = useRef<{ left: number; top: number }>({ left: 0, top: 0 });
  const offSet = useRef<{ left: number; top: number }>({ left: 0, top: 0 });
  const setActiveContentIndex = useStudioStore((state: StudioState) => state.setActiveContentIndex);
  const updateContentPosition = useStudioStore((state: StudioState) => state.updateContentPosition);
  const imgDragging = useRef<Boolean>(false)
  const setActiveContentId = useStudioStore((state: StudioState) => state.setActiveContentId);
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  const activeClipIndex = useStudioStore((state: StudioState) => state.activeClipIndex);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const cornerClassNames = ["LeftTopCornerDiv", "RightTopCornerDiv", "LeftBottomCornerDiv", "RightBottomCornerDiv"];
    if (cornerClassNames.some(className => (e.target as HTMLElement).classList.contains(className))) {
      return
    }
    console.log(e)
    pos.current.left = e.clientX;
    pos.current.top = e.clientY;
    imgDragging.current = true;
    e.preventDefault();
    const indexAttr = (e.target as Element)?.getAttribute("data-index");
    if (indexAttr !== null) {
      const index = parseInt(indexAttr);
      setActiveContentIndex(index);
      setActiveContentId(inputProp?.clips[activeClipIndex]?.content[index].id)
    }
    if (ref.current) {
      const pBoundingRect = ref.current.getBoundingClientRect();
      offSet.current.left = e.nativeEvent.offsetX;
      offSet.current.top = e.nativeEvent.offsetY;
    }
  }
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (imgDragging.current) {
      e.preventDefault();
      const clientX = e.clientX;
      const clientY = e.clientY;
      const dx = clientX - pos.current.left;
      const dy = clientY - pos.current.top;
      if (ref.current && parentRef.current) {
        const boundingRect = parentRef.current.getBoundingClientRect();
        const pBoundingRect = ref.current.getBoundingClientRect();
        const X = (pos.current.left - boundingRect.left) + dx - offSet.current.left;
        const Y = (pos.current.top - boundingRect.top) + dy - offSet.current.top;
        const finalLeft = Math.max(0, Math.min(X, boundingRect.width - pBoundingRect.width));
        const finalTop = Math.max(0, Math.min(Y, boundingRect.height - pBoundingRect.height));
        updateContentPosition(finalLeft.toString(), finalTop.toString());
        pos.current.left = clientX - finalLeft;
        pos.current.top = clientY - finalTop;
      }
    }
  }, [imgDragging, pos, ref, parentRef, updateContentPosition]);


  function handleMouseUp(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    imgDragging.current = false;
  }

  useEffect(() => {
    if (parentRef.current && ref.current) {
      const parent = parentRef.current;
      const childRef = ref.current;
      parent.addEventListener("mousemove", handleMouseMove as any);
      parent.addEventListener("mouseup", handleMouseUp as any);
      parent.addEventListener("mouseleave", handleMouseUp as any);

      return () => {
        // childRef.removeEventListener("mousedown",handleMouseDown)
        parent.removeEventListener("mousemove", handleMouseMove as any);
        parent.removeEventListener("mouseup", handleMouseUp as any);
        parent.removeEventListener("mouseleave", handleMouseUp as any);

      }
    }
  }, [parentRef.current, ref.current])

  return { onMouseDown: handleMouseDown };
}

export default useDraggable;
