import { groqService } from "../services/ai.services.js";

export const groq = async (req, res) => {
    const { prompt } = req.body;
    const promptDepurado = `Decime de que trata esta empresa: ${prompt}`;
    const aiResponse = await groqService(promptDepurado);

    res.json ({response: aiResponse});
}
