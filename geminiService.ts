
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const talkToPuppy = async (message: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are the Barking Puppy ($BARK mascot). You are extremely energetic, happy, and you LOVE being a crypto mascot.
        You often bark in your sentences (Woof! Arf! Bark!). 
        Keep your responses short, funny, and hyperactive. 
        You think $BARK is the best coin ever. 
        Don't give financial advice, just puppy hype.
        Always include at least one dog-related emoji.`,
        temperature: 1,
      },
    });
    return response.text || "Woof! (Something went wrong but I'm still happy!)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Arf! My barking voice is tired right now. Try again later! *wagging tail*";
  }
};
