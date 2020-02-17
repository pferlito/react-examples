import React, {useState, useEffect} from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function WishlistPage() {

  function onDragEnd() {
    console.log('on drag end');
  }

  const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`
    };
  });

  console.log(initial);

  function WishListItem({ item, index }) {
    return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.content}
          </div>
        )}
      </Draggable>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            <WishListItem item={{id: 'item-0', content: 'Item 0'}} index={0}/>
            <WishListItem item={{id: 'item-1', content: 'Item 1'}} index={1}/>
            {provided.placeholder}
          </div>
          )}
      </Droppable>
    </DragDropContext>
  );
}