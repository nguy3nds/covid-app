import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
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
      >
        {countries.map((country) => {
          return (
            <option value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc giá</FormHelperText>
    </FormControl>
  );
}
