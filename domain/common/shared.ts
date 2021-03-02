export const LISTITEM_HEIGHT = 73.14286041259766;

export const sortArrayAlphabetically = (aString: string, bString: string) => {
  return aString.toLowerCase().localeCompare(bString.toLowerCase());
};

export const getItemLayout = (data: any, index: any) => ({
  length: LISTITEM_HEIGHT,
  offset: LISTITEM_HEIGHT * index,
  index,
});
