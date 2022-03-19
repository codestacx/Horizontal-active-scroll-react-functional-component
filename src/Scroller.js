import React, { useMemo } from "react";
import "./styles.css";
import { Link, Element } from "react-scroll";
import StickyBox from "react-sticky-box";

const categories = [
  { id: 1, name: "Services" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Services" },
  { id: 4, name: "Training" },
  { id: 5, name: "Support" },
  { id: 6, name: "Research and Development" },
  { id: 7, name: "Training" },
  { id: 8, name: "Human Resources" },
  { id: 9, name: "Services" },
  { id: 10, name: "Legal" },
  { id: 11, name: "Sales" },
  { id: 12, name: "Legal" },
  { id: 13, name: "Accounting" },
  { id: 14, name: "Business Development" },
  { id: 15, name: "Accounting" },
  { id: 16, name: "Services" },
  { id: 17, name: "Training" },
  { id: 18, name: "Research and Development" },
  { id: 19, name: "Human Resources" },
  { id: 20, name: "Legal" },
  { id: 21, name: "Research and Development" },
  { id: 22, name: "Human Resources" },
  { id: 23, name: "Services" },
  { id: 24, name: "Research and Development" },
  { id: 25, name: "Research and Development" },
  { id: 26, name: "Accounting" },
  { id: 27, name: "Product Management" },
  { id: 28, name: "Human Resources" },
  { id: 29, name: "Legal" },
  { id: 30, name: "Legal" },
];

export const Scroller = () => {
  //we make sure to only recreate the refs if the categories array changes
  const refsById = useMemo(() => {
    const refs = {};
    categories.forEach((item) => {
      refs[item.id] = React.createRef(null);
    });
    return refs;
  }, [categories]);

  /**
   * Scroll into view using category ID
   * @param {*} id
   */
  const scrollToCategory = (id) => {
    refsById[id].current.scrollIntoView({ inline: "center" });
  };
  return (
    <>
      {" "}
      <h1>Horizontal Scroll</h1>{" "}
      <StickyBox>
        <ul
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            listStyleType: "none",
            paddingLeft: "20px",
            backgroundColor: "#e2e2e2",
            flexWrap: "nowrap",
            height: "70px",
            justifyItems: "center",
          }}
        >
          {categories.map((category) => (
            <li
              key={category.id}
              style={{
                display: "inline-block",
                margin: "20px",
              }}
              ref={refsById[category.id]}
            >
              <Link
                activeClass="activeCategoryLink"
                className={category.id}
                to={category.id.toString()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={() => scrollToCategory(category.id)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </StickyBox>
      <div style={{ marginTop: "30px" }}>
        {categories.map((category) => (
          <Element
            name={category.id.toString()}
            className={category.id}
            key={"display" + category.id}
          >
            <div style={{ height: "50vh" }}>
              <h2>{category.name}</h2>
            </div>
          </Element>
        ))}
      </div>
    </>
  );
};
