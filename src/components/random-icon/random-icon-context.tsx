import { createContext, FC, ReactNode, useState } from "react";

import {
  faAddressBook,
  faAngry,
  faBell,
  faBookmark,
  faBuilding,
  faCalendarCheck,
  faCaretSquareRight,
  faEnvelope,
  faStarHalfStroke,
  faTired,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

const icons: ReadonlyArray<IconDefinition> = [
  faEnvelope,
  faAddressBook,
  faAngry,
  faBell,
  faCalendarCheck,
  faBookmark,
  faCaretSquareRight,
  faTired,
  faStarHalfStroke,
  faBuilding,
];

const getRandomIconIndex = (iconsList: ReadonlyArray<IconDefinition>) =>
  Math.floor(Math.random() * iconsList.length);

interface IRandomIconContext {
  icon: IconDefinition;
  selectIcon: () => void;
}

export const RandomIconContext = createContext<IRandomIconContext>({
  icon: icons[0],
  selectIcon: () => {},
});

interface Props {
  children: ReactNode;
}

const RandomIconProvider: FC<Props> = ({ children }) => {
  const [iconIndex, setIconIndex] = useState(0);
  const icon = icons[iconIndex];

  const selectIcon = () => setIconIndex(getRandomIconIndex(icons));

  return (
    <RandomIconContext.Provider value={{ selectIcon, icon }}>
      {children}
    </RandomIconContext.Provider>
  );
};

export default RandomIconProvider;
