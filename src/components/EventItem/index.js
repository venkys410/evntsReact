// Write your code here
import './index.css'

const EventItem = props => {
  const {details, isActive, onClickEvent} = props
  const {id, imageUrl, location, name, registrationStatus} = details
  const imgClass = isActive ? 'active-img event-img' : 'event-img'

  const onSelectEvent = () => {
    onClickEvent(id, registrationStatus)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onSelectEvent}>
        <img src={imageUrl} alt="event" className={imgClass} />
        <p className="event-name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
