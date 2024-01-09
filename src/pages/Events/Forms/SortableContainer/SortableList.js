import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Paper, List, ListItem, IconButton, Divider, Box} from '@mui/material';
import { RiDraggable } from "react-icons/ri";

const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners} sx={{ p: 1, width: '100%', height: '100%' }}>
      <Paper>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IconButton  sx={{float: 'inline-end'}}>
            <RiDraggable />
          </IconButton>
          {content}
        </Box>
      </Paper>
    </Box>
  );
};

const SortableContainer = ({ items }) => {
  return (
    <Box>
      <SortableContext items={items.map((item) => item.id)}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <SortableItem id={item.id} content={item.content} />
            {index !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </SortableContext>
    </Box>
  );
};

// Inside the SortableList component
const SortableList = ({ items: initialItems, move }) => {
  const [items, setItems] = useState(initialItems);
  
  useEffect(() => {
      setItems(initialItems);
  }, [initialItems]);

  const sensors = useSensors(
      useSensor(MouseSensor, {
          activationConstraint: {
              distance: 8,
          },
      }),
      useSensor(TouchSensor, {
          activationConstraint: {
              delay: 200,
              tolerance: 6,
          },
      }),
  );

  const handleSortEnd = ({ active, over }) => {
    if (active && over && active.id && over.id && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, prevItems[oldIndex]);

        // Update the order of fields in the myForm array using move
        move(oldIndex, newIndex);
        
        return newItems;
      });
    }
  };

  return (
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleSortEnd}>
          <SortableContainer items={items} />
      </DndContext>
  );
};

export default SortableList;

