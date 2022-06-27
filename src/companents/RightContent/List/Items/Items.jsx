import React from 'react'
import { useDispatch } from 'react-redux'
import { emplloyActions } from '../../../../store/Splice'

function Items({
  id, name,
  email, number,
  departament, setModal,
  setItemsID, setAdd
}) {
  const dispatch = useDispatch()

  const deletFunc = (id) => {
    dispatch(emplloyActions.deleteFunc({
      id: id
    }))
  }

  return (
    <>
      <li className='content__item'>
        <p className="conitem__tit p1">{name}</p>
        <p className="conitem__tit p2">{email}</p>
        <p className="conitem__tit p3">{number}</p>
        <p className="conitem__tit p4">{departament}</p>
        <div className="conitem__btn-box">
          <button
            className="conitem__change-btn" id={id}
            onClick={() => (setItemsID(id), setAdd(false), setModal(true))}>
            <i className='bx bx-pencil'></i>
          </button>
          <button
            className="conitem__remov-btn"
            onClick={() => deletFunc(id)}>
            <i className='bx bx-x'></i>
          </button>
        </div>
      </li>
    </>
  )
}

export default Items
