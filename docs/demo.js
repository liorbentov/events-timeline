import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import EventsTimeline from '../src/events-timeline';

export default () => (
  <Page>
    <h2>Demo Page</h2>

    <hr />

    <ReactSpecimen span={3}>
      { <EventsTimeline
        color="blue"
        currentIndex={2}
        emptyColor="white"
        onClick={() => {}}
        points={[{ title: 'First' }, {}, { title: 'Third' }]}
      />}
    </ReactSpecimen>
  </Page>
);
