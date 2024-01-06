const CustomCursor = ({
  elementHovered,
  position,
  dynamicSize,
  sizeTransitionAnimation,
  navbarHover,
}) => {
  return (
    <div
      className={`${
        navbarHover ? "custom-cursor-vanish" : sizeTransitionAnimation ? "sizeTransitionAnimation" : ""
      } custom-cursor fixed border-solid border-royalAmethyst border-[3px] rounded-[50%] bg-[transparent] z-[99999] ${
        elementHovered?.color === "primaryBlue"
          ? "!border-primaryBlue"
          : elementHovered?.color === "lightLavender"
          ? "!border-lightLavender"
          : elementHovered?.color === "black"
          ? "!border-[black]"
          : ""
      }
    `}
      style={{
        transform: `translate(${
          elementHovered
            ? elementHovered.x - elementHovered?.width / 2
            : position.x
        }px, ${
          elementHovered
            ? elementHovered.y - elementHovered?.height / 2
            : position.y
        }px)`,
        width: elementHovered ? elementHovered?.width : dynamicSize,
        height: elementHovered ? elementHovered?.height : dynamicSize,
        borderRadius: elementHovered?.radius,
      }}
    ></div>
  );
};

export default CustomCursor;