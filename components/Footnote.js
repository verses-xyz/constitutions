import useToggle from "../hooks/useToggle";
import useOutsideClick from "../hooks/useOutsideClick";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";

export default function Footnote({
  children,
  data,
  left,
  topOffset,
}) {
  const [expanded, toggle] = useToggle();
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (expanded) {
      toggle();
    }
  });

  return (
    <span
      // only toggle if it's not mobile
      onClick={toggle}
      ref={ref}
      className={`footnote ${expanded ? "expanded" : ""}`}
    >
      <span className="footnote-text">{children}</span>
      <div
        className={`footnote-content ${left ? "footnote-content-left" : "footnote-content-right"
          }`}
        style={{ marginTop: topOffset }}
      >
        {data}
      </div>
      {expanded && (
        <div className={`footnote-content-mobile`}>
          <button
            className="absolute"
            style={{ top: "var(--space-12)", right: "var(--space-12)" }}
            onClick={toggle}
          >
            <IoMdClose color="var(--foreground-default)" />
          </button>
          {data}
        </div>
      )}
    </span>
  );
}
