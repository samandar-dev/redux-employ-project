import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { emplloyActions } from '../../store/Splice'
import './Modal.scss'

function Modal({ modal, add, setAdd, setModal, itemsID }) {
  const obj = useSelector((state) => state.employ)
  const dispatch = useDispatch()
  const [fName, setFName] = useState('')
  const [email, setEmail] = useState('')
  const [mobil, setmobil] = useState('')
  const [categor, setCategor] = useState('')
  const [valFName, setValFName] = useState('Full Name')
  const [valEmail, setValEmail] = useState('email@')
  const [valMobil, setValMobil] = useState(1234567890)
  const [valCategor, setValCategor] = useState('Categor')

  const changeInputsFunc = (e) => {
    if (e.target.id === 'fullName') {
      setFName(e.target.value)
      setValFName(e.target.value)
    }
    if (e.target.id === 'emailInp') {
      setEmail(e.target.value)
      setValEmail(e.target.value)
    }
    if (e.target.id === 'mobil') {
      setmobil(e.target.value)
      setValMobil(e.target.value)
    }
    if (e.target.id === 'selcet') {
      setCategor(e.target.value)
      setValCategor(e.target.value)
    }
  }

  const submitFunc = (e) => {
    e.preventDefault()
    if (fName.length >= 3 && email.at(-1) === "@" && mobil.length >= 8 && categor !== "None") {
      dispatch(emplloyActions.addItemsFunc({
        name: fName,
        email: email,
        number: mobil,
        departament: categor,
      }))
      e.target.reset();
      setAdd(false)
    }
    else if (fName.length < 3) {
      setValFName('')
    }
    else if (!email.includes("@")) {
      setValEmail('')
    }
    else if (mobil.length < 8) {
      setValMobil('')
    }
    else if (categor === "None") {
      setValCategor('None')
    }
  }

  const itemEditFunc = () => {
    dispatch(emplloyActions.editFunc({
      id: itemsID,
      name: fName,
      email: email,
      number: mobil,
      departament: categor,
    }))
    setModal(false)
  }

  useEffect(() => {
    if (add === true) {
      setFName('')
      setEmail('')
      setmobil('')
      setCategor('')
    }
    else {
      obj.map((itm, i) => {
        if (itm.id === itemsID) {
          setFName(itm.name)
          setValFName(itm.name)
          setEmail(itm.email)
          setValEmail(itm.email)
          setmobil(itm.number)
          setValMobil(itm.number)
          setCategor(itm.departament)
          setValCategor(itm.departament)
        }
      })
    }
  }, [itemsID, add]);


  return (
    <>
      <div className={`modall ${modal ? "show-modal" : ""}`}>
        <div className="modal__inner">
          <div className="modal__top-box">
            <h3 className="modal__top-title">Employee Form</h3>
            <button className="modal__top-rem-btn" onClick={() => (setModal(false), setAdd(true))}>
              <i className="bx bx-x"></i>
            </button>
          </div>
          <div className="modal__main">
            <form className="modal__form mform" onSubmit={submitFunc}>
              <div className="modal__left">
                <div className="mform__inp-box">
                  <input
                    className="mform__input nameInp"
                    type="text" name="text" id="fullName"
                    placeholder='Full Name' onChange={changeInputsFunc} value={fName}
                  />
                  {/* <label className="mform__inp-tit">Full Name</label> */}
                  <p className={`mform__eror-tit ${valFName.length < 3 ? "click-eror-tit" : ""}`}>This field is required.</p>
                </div>
                <div className="mform__inp-box">
                  <input
                    className="mform__input"
                    type="text" name="text" id="emailInp"
                    placeholder='Email' onChange={changeInputsFunc} value={email}
                  />
                  {/* <label className="mform__inp-tit">Email</label> */}
                  <p className={`mform__eror-tit ${!valEmail.includes("@") ? "click-eror-tit" : ""}`}>Email is not valid.</p>
                </div>
                <div className="mform__inp-box">
                  <input
                    className="mform__input"
                    type="number" name="number" id="mobil"
                    placeholder='Mobile' onChange={changeInputsFunc} value={mobil}
                  />
                  {/* <label className="mform__inp-tit">Mobile</label> */}
                  <p className={`mform__eror-tit ${valMobil.length < 8 ? "click-eror-tit" : ""}`}>Minimum 10 numbers required.</p>
                </div>
                <div className="mform__inp-box">
                  <input
                    className="mform__input" type="text"
                    name="text" id="sity" placeholder='City'
                  />
                  {/* <label className="mform__inp-tit">City</label> */}
                  <p className="mform__eror-tit">w</p>
                </div>
              </div>
              <div className="modal__right mright">
                <div className="mright__gener">
                  <h4 className="mright__title">Gener</h4>
                  <button className="mright__check"><span className="mright__check-span checkBtn-act" /> Male</button>
                  <button className="mright__check"><span className="mright__check-span" /> Female</button>
                  <button className="mright__check"><span className="mright__check-span" /> Other</button>
                </div>
                <div className="mright__main">
                  {/* <span className="mform__drop-tit">Departament</span> */}
                  <select className="mright__drop" id='selcet' onChange={changeInputsFunc} value={categor}>
                    <option className="mright__selec-opt" value="None">None</option>
                    <option className="mright__selec-opt" value="Development">Development</option>
                    <option className="mright__selec-opt" value="Marketing">Marketing</option>
                    <option className="mright__selec-opt" value="Accounting">Accounting</option>
                    <option className="mright__selec-opt" value="HR">HR</option>
                  </select>
                  <p className={`mform__drop_eror-tit ${valCategor === 'None' ? "mform__drop-tit-eror" : ""}`}>This field is required.</p>
                  <div className="mright__data-box">
                    <span className="mright__data-tit">Heri Date</span>
                    <input className="mright__data" type="date" name="data" />
                  </div>
                  <div className="mright__check-box">
                    <div className="mright__check-tit">
                      <div className="mright__check-btn-span"><i className="bx bx-check" /></div>Permanent Employee
                    </div>
                  </div>
                  <div className="mright__submit-box">
                    {add
                      ? <button className="mright__submit" id="submitBtn" onClick={() => setModal(false)}>Submit</button>
                      : <button className="mright__submit" id="submitBtn2" type="button" onClick={itemEditFunc}>Submit</button>
                    }
                    <button className="mright__reset" type='button' onClick={() => (setModal(false), setAdd(false))}>Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
