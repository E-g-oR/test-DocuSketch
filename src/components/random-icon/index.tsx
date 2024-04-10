import { FC, useCallback, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RandomIconContext } from "./random-icon-context";

import "./styles.css";

const RandomIcon: FC = () => {
  const { selectIcon, icon } = useContext(RandomIconContext);
  const onClick = useCallback(() => setTimeout(selectIcon, 3000), []);

  return (
    <div className={"random-icon"}>
      <FontAwesomeIcon icon={icon} />
      <button onClick={onClick}>Change icon</button>
    </div>
  );
};

export default RandomIcon;
