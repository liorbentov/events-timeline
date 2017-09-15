import React from 'react';

export class EventsTimeline extends React.Component {
  static propTypes: {
    color: React.PropTypes.string,
    currentIndex: React.PropTypes.number,
    emptyColor: React.PropTypes.string,
    onClick: React.PropType.func,
    points: React.PropTypes.Array.isRequired,
  }

  static defaultProps = {
    color: '#5151ff',
    currentIndex: 0,
    emptyColor: '#ffffff',
  }

  constructor(props) {
    super(props);
    this.handlePointClick = this.handlePointClick.bind(this);

    const { currentIndex } = props;
    const right = this.getRight(currentIndex);
    this.state = { right, currentIndex };
  }

  getRight(index) {
    const pointsAmount = this.props.points.length;
    const gap = 100 / pointsAmount;
    const halfGap = gap / 2;
    const multiplyBy = pointsAmount - index;

    const right = gap * multiplyBy - halfGap;
    return right;
  }

  handlePointClick(currentIndex) {
    const { onClick } = this.props;
    const right = this.getRight(currentIndex);
    this.setState({ right, currentIndex });

    if (onClick) {
      onClick(currentIndex);
    }
  }

  mapItems() {
    const { currentIndex } = this.state;
    const { points } = this.props;

    return points.map((item, index) => {
      const onClick = () => this.handlePointClick(index);
      const style = this.getPointStyle(index);
      const classes = [!item.title && "untitled-event"].filter(Boolean).join(" ");
      return (
        <li key={index} className="events-timeline-event">
          { item.title && <span className="event-title">{item.title}</span> }
          <button style={style} className={classes} onClick={onClick}/>
        </li>
      );
    })
  }

  getPointStyle(pointIndex) {
    const { currentIndex } = this.state;
    const { color, emptyColor } = this.props;
    const style = { backgroundColor: emptyColor };

    if (pointIndex <= currentIndex) {
      style.backgroundColor = color;
    }

    return style;
  }

  getLineStyle() {
    return { backgroundColor: this.props.emptyColor };
  }

  getFilledLineStyle() {
    const right = `${this.state.right}%`;
    return {
      backgroundColor: this.props.color,
      right
    };
  }

  render() {
    const lineStyle = this.getLineStyle();
    const filledLineStyle = this.getFilledLineStyle();
    return (
      <div className="events-timeline-component">
        <ul className="events-timeline-container">
          <span className="events-timeline-line" style={lineStyle} />
          <span className="events-timeline-line events-timeline-filled" style={filledLineStyle} />
          { this.mapItems() }
        </ul>
      </div>
    );
  }
};
