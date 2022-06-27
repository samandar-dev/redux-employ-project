import React from 'react'
import './AddModal.scss'

function AddModal() {
  return (
    <>
      <div className="addItem-messag">
        <span className="check-messag" id="iconMass1">
          <i className="bx bx-check-circle" />
        </span>
        <span className="check-messag" id="iconMass2">
          <i className="bx bx-error-circle" />
        </span>
        <p className="text-messag" id="textMass1">Submitted Successfully</p>
        <p className="text-messag" id="textMass2">Deleted Successfully</p>
        <button className="remMesseg">
          <i className="bx bx-x" />
        </button>
      </div>
    </>
  )
}

export default AddModal
