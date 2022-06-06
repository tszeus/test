import Col from "./Col";
import styles from "./Container.module.css";

const image = require("../../assets/images/logoNCC 1.svg").default;

const cols = [
  {
    header: "Lorem ipsum dolor sit amet",
    image: require("../../assets/images/css-icon 1.png"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    header: "Lorem ipsum dolor sit amet",
    image: require("../../assets/images/html-icon 1.png"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    header: "Lorem ipsum dolor sit amet",
    image: require("../../assets/images/url-icon 1.png"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

function Container() {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="logo" className={styles.logo} />
      <div className={styles.content}>
        <div className={styles.contentHeader}>Lorem ipsum dolor sit asmet?</div>
        <div className={styles.contentContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </div>
      </div>
      <div className={styles.cols}>
        {cols.map((col, index) => (
          <Col
            key={index}
            header={col.header}
            image={col.image}
            content={col.content}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>Copyright © 2021</p>
      </div>
    </div>
  );
}

export default Container;
