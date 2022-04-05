export const strEnum = (arr: string[]) => {
  let obj: any = {};
  arr.forEach((str: string) => {
    obj[str] = str;
  });
  return obj;
};

export const getMeta = (
  url: string
): Promise<{
  width: number;
  height: number;
}> => {
  return new Promise((r) => {
    const img = new Image();
    img.addEventListener("load", function () {
      r({ width: this.naturalWidth, height: this.naturalHeight });
    });
    img.src = url;
  });
};
