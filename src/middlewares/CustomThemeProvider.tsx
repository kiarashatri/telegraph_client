import { Theme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setTheme } from "../redux/slice/user";

type PropsType = {
  theme: Theme;
  children: JSX.Element;
};

const CustomThemeProvider = (props: PropsType): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect((): void => {
    console.log(props.theme);
    // dispatch(setTheme(props.theme));
  }, [props.theme]);

  return (
    <>
      <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
    </>
  );
};

export default CustomThemeProvider;
