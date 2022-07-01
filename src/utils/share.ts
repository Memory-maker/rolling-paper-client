interface shareData {
  title: string;
  text: string;
  url: string;
}

export const shareContent = async (data: shareData) => {
  try {
    if (typeof window.navigator.share !== "undefined") {
      await window.navigator.share(data);
    } else {
      //webshare api환경이 아닐 경우!
    }
  } catch (error: unknown) {
    console.log(error, "error");
  }
};
