import React, { useMemo, } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



const SortableContainer = ({id}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id});
    

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: 'grab',
  };


    return (
        <div
            className={''}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <div className={''}>
                This is the sort Container
            </div>
        </div>
    );
};

export default SortableContainer;
