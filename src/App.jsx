import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from './companents/Modal/Modal';
import LeftContent from './companents/LeftContent/LeftContent';
import RightContent from './companents/RightContent/RightContent';
import './App.scss';

function App() {
  const obj = useSelector((state) => state.employ)

  const [arr, setArr] = useState(obj)
  const [itemArr, setItemArr] = useState(obj)

  const [modal, setModal] = useState(false)
  const [add, setAdd] = useState(false)
  const [itemsID, setItemsID] = useState(0)
  const [pagnitionCount, setPagnitionCount] = useState(5)
  const [pagnitionID, setPagnitionID] = useState(1)

  useEffect(() => {
    setArr(obj)
    setItemArr(arr)
  }, [arr, obj]);

  return (
    <>
      <section className="block">
        <LeftContent />
        <RightContent
          arr={arr}
          setArr={setArr}
          itemArr={itemArr}
          pagnitionID={pagnitionID}
          setPagnitionID={setPagnitionID}
          pagnitionCount={pagnitionCount}
          setPagnitionCount={setPagnitionCount}
          setItemArr={setItemArr}
          setModal={setModal}
          setAdd={setAdd}
          setItemsID={setItemsID}
        />
        <Modal
          modal={modal}
          add={add}
          setAdd={setAdd}
          setModal={setModal}
          itemsID={itemsID}
        />
      </section>
    </>
  );
}

export default App;
