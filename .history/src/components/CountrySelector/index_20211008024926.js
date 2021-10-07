import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector({ value, hanhleChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quoc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={hanhleChange}
        inputProps={{ name: "country", id: "country-selector" }}
      ></NativeSelect>
    </FormControl>
  );
}
