import { GoogleGenerativeAI  } from "@google/generative-ai";

export const recommendation = async (req, res) => {
    const { topics, skillLevel } = req.body;

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key not set" });
    }

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

        const prompt = `Suggest 2 courses for the following preferences:
        Topics: ${topics}
        Skill Level: ${skillLevel}
        Please format the response as a JSON object with a single key 'courses' containing an array of two objects. Each object should have keys 'name' (string) and 'description' (string).`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        let recommendations;
        try 
		{
            recommendations = JSON.parse(text);
        } 
		catch (parseError) {
            console.error("Failed to parse Gemini API response:", text);
            return res.status(500).json({ error: "Failed to parse API response. Please try again." });
        }

        res.json({ recommendations: recommendations.courses });
    } catch (e) {
        console.error("Error fetching recommendations from Gemini API:", e);
        res.status(500).json({ error: e.message || "Failed to get recommendations" });
    }
};


// // Mock Gemini API response
//   const recommendations = [
//     { title: "Intro to MERN", level: "Beginner", topic: "Full Stack" },
//     { title: "Advanced React Patterns", level: "Intermediate", topic: "Frontend" },
//     { title: "Node.js Microservices", level: "Advanced", topic: "Backend" }
//   ];

//   res.json({ recommendations });

