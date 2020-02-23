import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import image from "../images/reorder.png";

function WishListItem({item, index}) {
  return (
    <Container>
      <Row>
        <Col md={{span: 3, offset: 4}}>
          <Draggable draggableId={item.id} index={index}>
            {provided => (
              <div className="wishlist-item"
                   ref={provided.innerRef}
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
              >
                <div className="content-wrap">
                  <h7>{item.title}</h7>
                  <h6>{item.price}</h6>
                </div>
                <div className="handle-wrap">
                  <img alt="reorder" src={image} />
                </div>
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
    {
      id: 'id-3',
      title: 'Blender',
      price: '$150'
    },
  ];

  const [list, setList] = useState(initial);

  function onDragEnd(result) {
    const newList = reorder(list, result.source.index, result.destination.index);
    setList(newList);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h4 className="mb-3 text-center">Wish List (drag to reorder)</h4>
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