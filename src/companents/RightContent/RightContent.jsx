import React from 'react'
import Form from './Form/Form'
import List from './List/List'
import Pagnition from './Pagnition/Pagnition'
import CategorBtns from './CategorBtn/CategorBtns'
import './RightContent.scss'

function RightContent({ pagnitionCount, setPagnitionCount, pagnitionID, setPagnitionID, arr, setArr, itemArr, setItemArr, setModal, setAdd, setItemsID }) {

  return (
    <>
      <div className="block__inner">
        <div className="block__header header">
          <div className="header__search_box">
            <span className="header__search_icon"><i className="bx bx-search" /></span>
            <input
              className="header__search_inp"
              type="text" name="text"
              placeholder="Search topics"
            />
          </div>
          <div className="header__btn-box">
            <button className="header__btn">
              <i className="bx bx-bell" />
            </button>
            <button className="header__btn">
              <i className="bx bx-message-square" />
            </button>
            <button className="header__btn">
              <i className="bx bx-power-off" />
            </button>
          </div>
        </div>
        <div className="block__main main">
          <div className="main__user-box">
            <span className="user__icon">
              <i className="bx bxs-user-rectangle" style={{ color: '#0b6dbd' }} />
            </span>
            <div>
              <h3 className="main__title">New Employee</h3>
              <p className="main__tit">Form design with validation</p>
            </div>
          </div>
        </div>
        <div className="main__content">
          <div className="main__content-box">
            <div className="content__box">
              <Form arr={arr} setItemArr={setItemArr} />
              <div className="content__add-box">
                <button
                  className="content__add-btn"
                  onClick={() => (setModal(true), setAdd(true))}>+ Add New
                </button>
              </div>
            </div>
            <div className="content__btns">
              <CategorBtns itemArr={itemArr} setItemArr={setItemArr} />
            </div>
            <div className="content__list-box">
              <List
                itemArr={itemArr}
                setModal={setModal}
                setAdd={setAdd}
                setItemsID={setItemsID}
                pagnitionCount={pagnitionCount}
                pagnitionID={pagnitionID}
                setPagnitionID={setPagnitionID}
              />
            </div>
            <Pagnition
              pagnitionID={pagnitionID}
              setPagnitionID={setPagnitionID}
              pagnitionCount={pagnitionCount}
              setPagnitionCount={setPagnitionCount}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightContent
