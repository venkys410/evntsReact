// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <div className="noEvent-container">
      <p className="noEvent-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="tick-icon"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-img"
      />
      <p className="yet-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live ofen can make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventDetails = () => {
    switch (eventRegistrationStatus) {
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedView()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()

      default:
        return renderNoActiveEvent()
    }
  }

  return <div className="registration-page">{renderActiveEventDetails()}</div>
}

export default ActiveEventRegistrationDetails
