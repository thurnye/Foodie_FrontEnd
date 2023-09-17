import React, { useEffect, useState } from 'react';
import {
    closestCenter,
    DndContext,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import SortableContainer from './SortableContainer';


const PRManageReportColumnSelection = ({items}) => {
    const [columns, setColumns] = useState([]);

    const onDragEnd = (event) => {
        const { active, over } = event;

        if (over && active.id !== over?.id) {
            setColumns((items) => {
                const activeIndex = items.findIndex(
                    (column) => column.id.toString() === active.id.toString(),
                );
                const overIndex = items.findIndex(
                    (column) => column.id.toString() === over.id.toString(),
                );
                return arrayMove(columns, activeIndex, overIndex);
            });
        }
    };

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
    );

    

    


    

    window.console.log({columns});

    return (
        <div className={''}>
            <div className={''}>
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={onDragEnd}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                    sensors={sensors}
                >
                    <SortableContext items={columns} strategy={verticalListSortingStrategy}>
                        {columns.map((item) => (
                            <SortableContainer
                                id={item.id}
                                key={item.id}
                            />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};

export default PRManageReportColumnSelection;
