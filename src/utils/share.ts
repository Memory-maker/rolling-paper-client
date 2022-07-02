interface shareData {
  title: string;
  text: string;
  url: string;
}

export const shareContent = async (data: shareData) => {
  try {
    if (typeof window.navigator.share !== "undefined") {
      await window.navigator.share(data);
    }
  } catch (error: unknown) {
    console.log(error, "error");
  }
};
