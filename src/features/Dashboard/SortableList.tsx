import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCorners,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Paper,
  Divider,
  Box,
  IconButton,
} from '@mui/material';
import { RiDraggable } from 'react-icons/ri';

// Define Item interface
export interface SortableItemData {
  id: string;
  content: React.ReactNode;
}

// Props for SortableItem
interface SortableItemProps {
  id: string;
  content: React.ReactNode;
}

// Single draggable item
const SortableItem: React.FC<SortableItemProps> = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners} sx={{ p: 1, width: '100%', height: '100%' }}>
      <Paper>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ cursor: 'grab', mr: 1 }}>
            <RiDraggable />
          </IconButton>
          {content}
        </Box>
      </Paper>
    </Box>
  );
};

// Container for sortable items
interface SortableContainerProps {
  items: SortableItemData[];
}

const SortableContainer: React.FC<SortableContainerProps> = ({ items }) => {
  return (
    <Box>
      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
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

// Main SortableList component
interface SortableListProps {
  items: SortableItemData[];
  move: (oldIndex: number, newIndex: number) => void;
}

const SortableList: React.FC<SortableListProps> = ({ items: initialItems, move }) => {
  const [items, setItems] = useState<SortableItemData[]>(initialItems);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  // Sensors
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 6 } })
  );

  // Handle sort end
  const handleSortEnd = ({ active, over }: DragEndEvent) => {
    if (!active || !over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setItems((prevItems) => {
      const newItems = [...prevItems];
      const [moved] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, moved);

      move(oldIndex, newIndex); // propagate to parent
      return newItems;
    });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleSortEnd}>
      <SortableContainer items={items} />
    </DndContext>
  );
};

export default SortableList;
