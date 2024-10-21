import { useEffect, useState, useRef } from "react";
import useStudioStore, { StudioState } from "@/stores/studio";

const ResizeHook = (
  ref: React.RefObject<HTMLDivElement>,
  parentRef: React.RefObject<HTMLDivElement>
) => {
  const imgDragging = useRef(false);
  const selectedDiv = useRef("");
  const holdingPosition = useRef({ x: 0, y: 0 });
  const setActiveContentId = useStudioStore(
    (state: StudioState) => state.setActiveContentId
  );
  const setActiveContentIndex = useStudioStore(
    (state: StudioState) => state.setActiveContentIndex
  );
  const updateContentPosition = useStudioStore(
    (state: StudioState) => state.updateContentPosition
  );
  const inputProp = useStudioStore((state: StudioState) => state.inputProp);
  const activeClipIndex = useStudioStore(
    (state: StudioState) => state.activeClipIndex
  );
  const updateContentSize = useStudioStore(
    (state: StudioState) => state.updateContentSize
  );
  const handleMouseDown = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    imgDragging.current = true;
    selectedDiv.current = e.currentTarget?.id;
    console.log(selectedDiv.current);
    const indexAttr = (e.target as Element)?.getAttribute("data-index");
    if (indexAttr !== null) {
      const index = parseInt(indexAttr);
      setActiveContentIndex(index);
      setActiveContentId(inputProp?.clips[activeClipIndex]?.content[index].id);
    }
    const pos = { x: e.clientX, y: e.clientY };
    holdingPosition.current = pos;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (imgDragging.current) {
      const reliefPosition = { x: e.clientX, y: e.clientY };
      const dx = reliefPosition.x - holdingPosition.current.x;
      const dy = reliefPosition.y - holdingPosition.current.y;
      if (ref.current && parentRef.current) {
        const pBoundingRect = ref.current?.getBoundingClientRect();
        const boundingRect = parentRef.current?.getBoundingClientRect();
        let finalLeft = pBoundingRect?.width;
        let finalTop = pBoundingRect?.height;
        console.log(selectedDiv.current);
        switch (selectedDiv.current) {
          case "RightBottomCornerDiv":
            finalLeft += dx;
            finalTop += dy;
            ref.current.style.height = finalTop + "px";
            ref.current.style.width = finalLeft + "px";
            break;
          case "LeftBottomCornerDiv":
            console.log(dx, dy);
            finalLeft -= dx;
            finalTop += dy;
            ref.current.style.left =
              parseInt(ref.current.style.left) + dx + "px";
            ref.current.style.height = finalTop + "px";
            ref.current.style.width = finalLeft + "px";
            break;
          case "RightTopCornerDiv":
            finalLeft += dx;
            finalTop -= dy;
            ref.current.style.top = parseInt(ref.current.style.top) + dy + "px";
            ref.current.style.height = finalTop + "px";
            ref.current.style.width = finalLeft + "px";
            break;
          case "LeftTopCornerDiv":
            finalLeft -= dx;
            finalTop -= dy;
            ref.current.style.top = parseInt(ref.current.style.top) + dy + "px";
            ref.current.style.left =
              parseInt(ref.current.style.left) + dx + "px";
            ref.current.style.height = finalTop + "px";
            ref.current.style.width = finalLeft + "px";
            break;
          default:
            break;
        }
        holdingPosition.current = reliefPosition;
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    imgDragging.current = false;
    if (ref.current) {
      const pBoundingRect = ref.current?.getBoundingClientRect();
      updateContentSize(
        pBoundingRect.width.toString(),
        pBoundingRect.height.toString()
      );
    }
  };

  useEffect(() => {
    if (parentRef.current) {
      const parent = parentRef.current;
      parent.addEventListener("mousemove", handleMouseMove as any);
      parent.addEventListener("mouseup", handleMouseUp as any);
      parent.addEventListener("mouseleave", handleMouseUp as any);
      return () => {
        parent.removeEventListener("mousemove", handleMouseMove as any);
        parent.removeEventListener("mouseleave", handleMouseUp as any);
        parent.removeEventListener("mouseup", handleMouseUp as any);
      };
    }
  }, [parentRef.current]);
  return { onMouseDown: handleMouseDown };
};

export default ResizeHook;
