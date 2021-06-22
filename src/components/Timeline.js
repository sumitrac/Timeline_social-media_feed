import React from 'react';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
    const events = props.events.map((event) => {
        return (<TimelineEvent
            key={event.timeStamp}
            person={event.person}
            status={event.status}
            time={event.timestamp} />);
            });

        return (
        <section className='timeline'>
            {events}
        </section>
        );
    };

export default Timeline;