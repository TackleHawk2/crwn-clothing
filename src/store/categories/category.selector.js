import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//This utilizes a principle called memoization, where a value is stored in cache to make it easy to recover.
//If the value never changes, then the resulting function will not rerun, improving performance

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories
    .reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {}));