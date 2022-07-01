import React, { useEffect } from 'react'
import { useState } from 'react'
import './CategorBtns.scss'

function CategorBtns({ arr, setArr }) {

  const [itemsName, setItemsName] = useState([])
  const [itemsEmail, setItemsEmail] = useState([])
  const [itemsNumber, setItemsNumber] = useState([])
  const [itemsDepart, settemsDepart] = useState([])

  const [sortNameArr, setSortNameArr] = useState([])
  const [sortEmailArr, setSortEmailArr] = useState([])
  const [sortNumberArr, setSortNumberArr] = useState([])
  const [sortDepartArr, setSortDepartArr] = useState([])

  const [nTrueFalse, setNTrueFalse] = useState(true)
  const [nameCount, setNameCount] = useState(1)
  const [emailCount, setEmailCount] = useState(1)
  const [numberCount, setNUmberCount] = useState(1)
  const [departCount, setDepartCount] = useState(1)

  const sortName = (e) => {
    setNTrueFalse(!nTrueFalse)
    if (e.target.id === 'empName') {
      setNameCount(p => p + 1)

      if (nTrueFalse === true) {
        setItemsName(arr.map(itm => itm.name).sort())
      }
      if (nTrueFalse === false) {
        setItemsName(arr.map(itm => itm.name).sort().reverse())
      }
      if (nameCount >= 2) {
        let sArr = itemsName.map(nameItm => {
          return {
            ...arr.filter(itm => itm.name === nameItm)
          }
        })
        setSortNameArr(sArr.map(el => el[0]))
      }
    }

    if (e.target.id === 'emaAddres') {
      setEmailCount(p => p + 1)

      if (nTrueFalse === true) {
        setItemsEmail(arr.map(itm => itm.email).sort())
      }
      if (nTrueFalse === false) {
        setItemsEmail(arr.map(itm => itm.email).sort().reverse())
      }
      if (emailCount >= 2) {
        let sArr = itemsEmail.map(nameItm => {
          return {
            ...arr.filter(itm => itm.email === nameItm)
          }
        })
        setSortEmailArr(sArr.map(el => el[0]))
      }
    }

    if (e.target.id === 'mobilNum') {
      setNUmberCount(p => p + 1)
      if (nTrueFalse === true) {
        setItemsNumber(arr.map(itm => itm.number).sort())
      }
      if (nTrueFalse === false) {
        setItemsNumber(arr.map(itm => itm.number).sort().reverse())
      }
      if (numberCount >= 2) {
        let sArr = itemsNumber.map(nameItm => {
          return {
            ...arr.filter(itm => itm.number === nameItm)
          }
        })
        setSortNumberArr(sArr.map(el => el[0]))
      }
    }

    if (e.target.id === 'deparSort') {
      setDepartCount(p => p + 1)
      if (nTrueFalse === true) {
        settemsDepart(arr.map(itm => itm.departament).sort())
      }
      if (nTrueFalse === false) {
        settemsDepart(arr.map(itm => itm.departament).sort().reverse())
      }
      if (departCount >= 2) {
        let sArr = itemsDepart.map(nameItm => {
          return {
            ...arr.filter(itm => itm.departament === nameItm)
          }
        })
        setSortDepartArr(sArr.map(el => el[0]))
      }
    }
  }

  useEffect(() => {
    setArr(sortNameArr)
  }, [sortNameArr]);

  useEffect(() => {
    setArr(sortEmailArr)
  }, [sortEmailArr]);

  useEffect(() => {
    setArr(sortNumberArr)
  }, [sortNumberArr]);

  useEffect(() => {
    setArr(sortDepartArr)
  }, [sortDepartArr]);

  return (
    <>
      <button className="content__btn" id="empName" onClick={sortName}>Employee Name</button>
      <button className="content__btn" id="emaAddres" onClick={sortName}>Email Address(Personal)</button>
      <button className="content__btn" id="mobilNum" onClick={sortName}>Mobil Number</button>
      <button className="content__btn" id="deparSort" onClick={sortName}>Departent</button>
      <p className="content__btn content__btn-tit">Actions</p>
    </>
  )
}

export default CategorBtns
