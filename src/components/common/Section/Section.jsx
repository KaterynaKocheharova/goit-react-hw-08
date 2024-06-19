import css from "./Section.module.css";
import clsx from "clsx";

const buildSectionClassName = (type) => {
  switch (type) {
    case "home-page":
      return css["home-section"];
    default:
      "";
  }
};

const Section = ({ children, type }) => {
  return (
    <section className={clsx(css.section, buildSectionClassName(type))}>
      {children}
    </section>
  );
};

export default Section;
