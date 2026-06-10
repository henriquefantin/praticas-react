// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <hr />
      <h2>Use Context</h2>
      <p>Context: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About