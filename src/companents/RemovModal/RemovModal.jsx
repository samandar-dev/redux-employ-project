import React from 'react'
import './RemovModal.scss'

function RemovModal() {
  return (
    <>
      <div className="modalRemov rem">
        <div className="rem__inner">
          <div className="rem__icon-box">
            <i className="bx bxs-location-plus" />
          </div>
          <h3 className="rem__title">Are you sure to delete this record?</h3>
          <p className="rem__tit">You can't undo this operation</p>
          <button className="rem__no-btn">No</button>
          <button className="rem__yes-btn">Yes</button>
        </div>
      </div>
    </>
  )
}

export default RemovModal
