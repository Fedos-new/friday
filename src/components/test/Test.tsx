import React from 'react';
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import Search from '../common/Search/Search';
import {PriceRange} from '../common/PriceRange/PriceRange';
import {SortButton} from '../common/SortButton/SortButton';


export const Test = () => {
  return (
    <div>
      <SuperButton>Button</SuperButton>
      <SuperInputText/>
      <SuperCheckbox/>
      <hr />
      <Search />
      <hr />
      <PriceRange />
      <hr />
      <SortButton />
    </div>
  );
}
