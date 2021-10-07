import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
import React from "react";

export default function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
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
