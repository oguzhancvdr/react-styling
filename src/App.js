// import Inline from './components/inline/Inline'
// import StyleSheet from './components/stylesheet/StyleSheet'
// import ModuleBtn from './components/moduleCss/ModuleBtn'
import Sassy from './components/sassy/Sassy'
import './styles.css'
import styles from './styles.module.css'

const App = () => {
  // console.log("styles obj: ", styles);
  return (
    <div>
      {/* <Inline />      */}
      {/* <StyleSheet primary={false} /> */}
      {/* <h1>Module Css</h1> */}
      {/* <ModuleBtn btnClass="primary" btnName="Module" /> */}
      {/* <ModuleBtn  btnClass="secondary" btnName="CSS" /> */}
      {/* <h1 className="error">Something went wrong</h1>
      {/*<h1 className={styles.success}>200 OK success </h1> */}
      <Sassy />
    </div>
  );
};

export default App;
