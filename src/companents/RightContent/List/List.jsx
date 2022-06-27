import React from 'react'
import Items from './Items/Items'
import './List.scss'

function List({ pagnitionID, setPagnitionID, pagnitionCount, itemArr, setModal, setItemsID, setAdd, setArr }) {
  return (
    <>
      <ul className="content__list">
        {itemArr.map((itm, i) => {
          if (pagnitionID <= i + 1 && pagnitionCount + pagnitionID > i + 1) {
            return <Items
              key={i + 1}
              id={itm.id}
              name={itm.name}
              email={itm.email}
              number={itm.number}
              departament={itm.departament}

              setAdd={setAdd}
              setArr={setArr}
              setModal={setModal}
              setItemsID={setItemsID}
            />
          }
        })}
      </ul>
    </>
  )
}

export default List
