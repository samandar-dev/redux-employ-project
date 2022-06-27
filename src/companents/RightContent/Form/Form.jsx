import React from 'react'
import './Form.scss'

function Form({ arr, setItemArr }) {

  const searchFunc = (e) => {
    setItemArr([...arr.filter(itm => itm.name.toLowerCase().includes(e.target.value.toLowerCase()))])
  }

  return (
    <>
      <form className="content__form form">
        <span className="content__form-tit">Search Employees</span>
        <span className="content__icon">
          <i className="bx bx-search-alt-2" color='#0a0a0a' />
        </span>
        <input className="search__input" type="text" name="text" id="search__input" onChange={searchFunc} />
      </form>
    </>
  )
}

export default Form
