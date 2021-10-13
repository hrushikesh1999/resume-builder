import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useForm = (name, Component, deleteAction) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState([]);
  const [timeS, setTimeS] = useState(null);
  const resume = useSelector((state) => state?.resume);
  useEffect(() => {
    let comps = count;
    let index = comps.findIndex((comp) => comp.props.timeStamp === timeS);
    if (index !== -1) {
      dispatch(deleteAction(index));
    }
    let filtered = comps.filter((comp) => {
      return comp.props.timeStamp !== timeS;
    });
    setCount(filtered);
  }, [timeS, dispatch, deleteAction]);
  // useEffect(() => {
  //   if (name === "Education" && resume.education.length > 0) {
  //     let eduArr = [];
  //     resume.education.forEach((element, index) => {
  //       eduArr.push(
  //         <Component
  //           key={element.key}
  //           timeStamp={element.key}
  //           setTimeS={setTimeS}
  //           // defaultValues={}
  //         />
  //       );
  //     });
  //     setCount((prevState) => [...prevState, ...eduArr]);
  //   }
  // }, [resume]);
  const onAddClick = (e) => {
    setCount((prevState) => [
      ...prevState,
      <Component
        key={e.timeStamp}
        timeStamp={e.timeStamp}
        setTimeS={setTimeS}
      />,
    ]);
  };
  return [count, onAddClick];
};

export default useForm;
