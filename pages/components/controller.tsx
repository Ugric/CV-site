import {
  createContext,
  CSSProperties,
  useContext,
  useEffect,
  useState,
} from "react";

const controllercontext = createContext<{
  scrollHeightTop: number;
  scrollHeightBottom: number;
  height: number;
}>({
  scrollHeightTop: 0,
  scrollHeightBottom: 0,
  height: 0,
});

const Controller = ({
  style,
  children,
}: {
  style?: CSSProperties;
  children?: React.ReactNode;
}) => {
  const [scrollHeightTop, setscrollHeightTop] = useState(0);
  const [scrollHeightBottom, setscrollHeightBottom] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const change = () => {
      let body = document.body,
        html = document.documentElement,
        height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
      setHeight(height);
      setscrollHeightTop(window.scrollY / height);
      setscrollHeightBottom((window.scrollY + window.innerHeight) / height);
    };
    change();
    window.addEventListener("scroll", change);
    window.addEventListener("resize", change);

    return () => {
      window.removeEventListener("scroll", change);
      window.removeEventListener("resize", change);
    };
  }, []);
  return (
    <controllercontext.Provider
      value={{ scrollHeightTop, scrollHeightBottom, height }}
    >
      <div style={style}>{children}</div>
    </controllercontext.Provider>
  );
};

const Effect = () => {
    const { scrollHeightTop, scrollHeightBottom, height } = useContext(
        controllercontext
    );
    return (
        <></>)
};
export { Effect, Controller };