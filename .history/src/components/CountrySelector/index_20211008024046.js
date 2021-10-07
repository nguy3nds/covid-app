import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector() {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quoc Gia
      </InputLabel>
      <NativeSelect></NativeSelect>
    </FormControl>
  );
}
