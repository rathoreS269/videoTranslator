import axios from "axios";
import { errorHandler } from "../utils.js/error.js";
import ytdl from 'ytdl-core';

export const test = (req, res) => {
  res.json({
    message: "hello world",
  });
};

export const processVideoLink = (req, res, next) => {
   try {
      const { videoUrl } = req.body;
      if (!videoUrl) {
        const error = errorHandler(400, 'Video URL is required.');
        return next(error);
      }
  
      const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
      if (!urlPattern.test(videoUrl)) {
        const error = errorHandler(400, 'Invalid URL format.');
        return next(error); 
      }
  
      const tempVideoData = {
        videoUrl,
        status: 'Processing',
      };
  
      res.status(200).json({
        message: 'Video link received and is being processed.',
        videoData: tempVideoData,
      });
    } catch (error) {
      next(error); 
    }
};

export const convertVideo = async(req, res, next) =>{
  console.log(req.body);
  try {
      const videoUrl = req.body;
      const videoInfo = await ytdl.getInfo(videoUrl);
      const audioFormats = ytdl.filterFormats(videoInfo.formats, "audioonly");
      console.log(audioFormats);
      audioFormats.map((item) => {
          res.send(item.url);
      });
  }  catch (error) {
    console.error('Error processing video link:', error);
    return next(errorHandler(500, 'An unexpected error occurred.'));
  }
};
