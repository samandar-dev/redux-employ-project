import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Pagnition.scss'

function Pagnition({ pagnitionID, setPagnitionID, pagnitionCount, setPagnitionCount }) {
  let obj = useSelector(state => state.employ)
  const [num, setNum] = useState(obj.length / pagnitionCount)
  const [fnum, setFNum] = useState(Math.floor(obj.length / pagnitionCount))
  const [count, setCount] = useState(1)

  const pagnitCount = (e) => {
    setPagnitionID(1)
    setCount(1)
    setPagnitionCount(+e.target.value)
  }

  const pagPrivFunc = () => {
    if (pagnitionID > 1) {
      setCount((n) => n - 1)
      setPagnitionID(pagnitionID - pagnitionCount)
    }
  }

  const pagNextFunc = () => {
    if (fnum > count) {
      setCount((n) => n + 1)
      setPagnitionID(pagnitionID + pagnitionCount)
    }
  }

  useEffect(() => {
    setNum(obj.length / pagnitionCount)
    setFNum(Math.floor(obj.length / pagnitionCount))
    if (num !== fnum) {
      setFNum((n) => n + 1)
    }
  }, [obj, pagnitionCount]);

  return (
    <>
      <div className="content__bottom bot">
        <p className="bot__tit">Rows per page:</p>
        <select className="bot__selec" onChange={pagnitCount}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='25'>25</option>
        </select>
        <p className="bot__num">1-{fnum} of {count}</p>
        <div className="bot__icon">
          <button className='left-btn'>
            <i className="bx bx-chevron-left" onClick={pagPrivFunc} />
          </button>
          <button className='right-btn'>
            <i className="bx bx-chevron-right" onClick={pagNextFunc} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagnition
