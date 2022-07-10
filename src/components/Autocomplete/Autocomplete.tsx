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

/** Autocomplete is a component that allows the user to enter text with suggestions.
 * In contrast to the Select component, Autocomplete allows custom text.*/
export default function Autocomplete({
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
