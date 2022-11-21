import * as React from "react";
import MuiSlider, { SliderProps as MuiSliderProps } from "@mui/material/Slider";

export interface Props extends MuiSliderProps {}

/** The slider omponent is for setting bounded incremental values*/
export default function Slider({ ...props }: Props): React.ReactElement {
  return <MuiSlider {...props} />;
}
