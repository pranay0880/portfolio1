import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "@mui/material/styles";
import { useMemo } from "react";

function App() {
  const theme = useTheme();

  const rgbColor = useMemo(() => {
    const hex = theme.palette.text.primary;
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }, [theme]);
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={4}
        outerSize={36}
        color={rgbColor}
        outerAlpha={0.3}
        innerScale={0.6}
        outerScale={1.2}
        outerStyle={{
          border: `3px solid ${theme.palette.text.primary}`,
        }}
        innerStyle={{
          backgroundColor: theme.palette.text.primary,
        }}
        showSystemCursor={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
