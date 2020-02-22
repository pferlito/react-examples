import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
                <h5>{item.title}</h5>
                <h6>{item.price}</h6>
              </div>
            )}
          </Draggable>
        </Col>
      </Row>
    </Container>
  );
}

function WishList({items}) {
  return items.map((item, idx) => {
    return (<WishListItem key={item.id} item={item} index={idx}/>)
  }, null);
}

/**
 * Reorder the list.
 * @param list
 * @param sourceIndex
 * @param destIndex
 * @returns Array
 */
function reorder(list, sourceIndex, destIndex) {
  const listCopy = [...list];
  const el = listCopy.splice(sourceIndex, 1).pop();
  listCopy.splice(destIndex, 0, el);
  return listCopy;
}

export default function WishlistPage() {
  const initial = [
    {
      id: 'id-0',
      title: 'Toaster',
      price: '$55'
    },
    {
      id: 'id-1',
      title: 'Refrigerator',
      price: '$650'

    },
    {
      id: 'id-2',
      title: 'Dishwasher',
      price: '$750'
    },
  ];

  const [list, setList] = useState(initial);

  function onDragEnd(result) {
    const newList = reorder(list, result.source.index, result.destination.index);
    setList(newList);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div className="wishlist-container" ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
          >
            <WishList items={list}/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}