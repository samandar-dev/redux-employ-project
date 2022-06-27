import React, { useEffect } from 'react'
import { useState } from 'react'
import './CategorBtns.scss'

function CategorBtns({ itemArr, setItemArr }) {

  // const [itemsName, setItemsName] = useState([])

  // const sortName = (e) => {
  // setItemsName(itemArr.map(itm => itm.name))
  // setItemsName(itemsName.sort())
  // setItemArr(itemsName.map((itm, inx) => {
  //   return {
  //     id: itemArr[inx].id,
  //     name: itm,
  //     email: itemArr[inx].name === itm ? itemArr[inx].email : "",
  //     number: itemArr[inx].number,
  //     departament: itemArr[inx].departament,
  //   }
  // }))
  // }

  // useEffect(() => {
  //   setItemsName(itemArr.map(itm => itm.name))
  //   itemsName.sort()
  // }, [itemArr]);

  return (
    <>
      <button className="content__btn" id="empName">Employee Name</button>
      <button className="content__btn" id="emaAddres">Email Address(Personal)</button>
      <button className="content__btn" id="mobilNum">Mobil Number</button>
      <button className="content__btn" id="deparSort">Departent</button>
      <p className="content__btn content__btn-tit">Actions</p>
    </>
  )
}

export default CategorBtns
