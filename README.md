# Events Timelime

This is a React component for displaying events on a timeline.
Events can have a title or just be a point in "time".

Well, There is not an actual time, the events are simply scattered across a line...

### How to use
##### Install
```npm install events-timeline```

##### Use in a view/component
```javascript
    import EventsTimeline from 'events-timeline';

    import 'events-timeline/style.css';

    ...
    <EventsTimeline
        events={[{ title: 'First' }, {}, { title: 'Third' }]}
        onClick={val => console.log(val)}
        color="blue"
        emptyColor="yellow"
        currentIndex={2}
    />
```

Don't forget to add `style.css`!

##### Component's Properties
| Property      | Type             | Default  | Notes |
| ------------- |:-----------------|:--------:|:-------------------------------------------|
| color         | string           | ```'#5151ff'``` | The color for 'filled' line & events
| currentIndex  | number           |               0 | The last point that will be 'filled' from the begining 
| emptyColor    | string           | ```'#ffffff'``` | The color for 'empty' line & events
| events        | Array (Required) |                 | The events to display.  An event can be an empty object or an object with 'title' property
| onClick       | function         |                 | The callback when click on event

License
----

MIT
