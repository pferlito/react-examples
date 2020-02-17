import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function WishlistPage() {

  function onDragEnd() {
    console.log('on drag end');
  }

  const initial = Array.from({length: 10}, (v, k) => k).map(k => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`
    };
  });

  console.log(initial);

  function WishListItem({item, index}) {
    return (
      <Container>
        <Row>
          <Col md={{span: 4, offset: 4}}>
            <Draggable draggableId={item.id} index={index}>
              {provided => (
                <div className="wishlist-item"
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                  {item.content}
                </div>
              )}
            </Draggable>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div className="wishlist-container" ref={provided.innerRef}
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