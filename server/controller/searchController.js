import express from "express";
import redisClient from "../config/redis.js";
import {Course} from "../models/Course.js";

export const search = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  const cacheKey = `course:title:${title.toLowerCase()}`;
//   console.log("Cache Key:", cacheKey);

  try {
    // 1️⃣ Check cache first
    const cachedCourse = await redisClient.get(cacheKey);
    if (cachedCourse) {
      return res.status(200).json({ source: "cache", data: JSON.parse(cachedCourse) });
    }

    // 2️⃣ Search in MongoDB (case-insensitive, partial match)
    const courses = await Course.find({
      title: { $regex: title, $options: "i" }
    });

    if (!courses || courses.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    // 3️⃣ Store in cache with expiry (1 hour = 3600s)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(courses));

    res.json({ source: "db", data: courses });
  } catch (err) {
    console.error("Error in search:", err.message);
    res.status(500).json({ error: err.message });
  }
};
