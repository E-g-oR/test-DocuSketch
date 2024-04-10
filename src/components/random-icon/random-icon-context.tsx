import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

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
  Math.round(Math.random() * iconsList.length);

interface IRandomIconContext {
  selectIcon: () => void;
  icon: IconDefinition;
}
export const RandomIconContext = createContext<IRandomIconContext>({
  selectIcon: () => {},
  icon: icons[0],
});

interface Props {
  children: ReactNode;
}
const RandomIconProvider: FC<Props> = ({ children }) => {
  const [iconIndex, setIconIndex] = useState(0);

  const selectIcon = useCallback(
    () => setIconIndex(getRandomIconIndex(icons)),
    [setIconIndex]
  );

  const icon = useMemo(() => icons[iconIndex], [iconIndex]);

  return (
    <RandomIconContext.Provider value={{ selectIcon, icon }}>
      {children}
    </RandomIconContext.Provider>
  );
};

export default RandomIconProvider;
