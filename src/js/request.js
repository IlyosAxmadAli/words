export const getData = async (url) => {
  try {
    const req = await fetch(url);
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
