import React, {useState, useEffect} from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function WishlistPage() {

  function onDragEnd() {
    console.log('on drag end');
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            <Draggable draggableId="test" index={0}>
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Test Content 1
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
          )}
      </Droppable>
    </DragDropContext>
  );
}