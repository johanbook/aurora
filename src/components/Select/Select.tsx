import * as React from "react";
import MuiAutocomplete, {
  Props as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";

import TextField from "../TextField";

export interface Option {
  id: string;
  label: string;
}

export interface Props extends MuiAutocompleteProps {
  /** Label */
  label: string;
  /** Options */
  options: Option[];
  /** Placeholder */
  placeholder: string;
}

/** Select is a component that allows the user to pick one of several options by
 * searching. This is in contrast to the Autocomplete component.*/
export default function Select({
  label,
  placeholder,
  ...props
}: Props): React.ReactElement {
  return (
    <MuiAutocomplete
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
      {...props}
    />
  );
}
