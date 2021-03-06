interface shareData {
  title: string;
  text: string;
  url: string;
}

export const shareContentWithWebapi = async (data: shareData) => {
  try {
    await window.navigator.share(data);
  } catch (error: unknown) {
    console.log(error, "error");
  }
};
