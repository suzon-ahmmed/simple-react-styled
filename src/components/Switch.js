import React, { useState ,useContext} from "react";
import { themeContext } from '../App';
import styles from "../assets/css/Switch.module.css";
import {ToggleSwitch} from './styles/Container.styles'
import { BiAdjust, BiSun } from "react-icons/bi";


function Switch() {
  const changeTheme = useContext(themeContext)
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    changeTheme();
  };

  return (
    <ToggleSwitch>
      <span><BiAdjust /></span>
      
      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={styles.switch} />
      </label>
      <span><BiSun /></span>
    </ToggleSwitch>
  );
}
export default Switch;
