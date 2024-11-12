export const test = (req, res) => {
  res.json({
    message: "hello world",
  });
};

export const processVideoLink = (req, res) => {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "video url is required" });
  }
  const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
  if (!urlPattern.test(videoUrl)) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  const tempVideoData = {
    videoUrl,
    status: "Processing",
  };
  res.status(200).json({
    message: "Video link received and is being processed.",
    videoData: tempVideoData,
  });
};
