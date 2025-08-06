import OpenAI from 'openai';

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

interface ParsedResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  experience: 'none' | '1-2-years' | '3-5-years' | '5plus-years';
  previousCleaning: string;
  whyJoin: string;
  additionalInfo: string;
}

export const parseResume = async (resumeText: string): Promise<ParsedResumeData | null> => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key not configured');
    return null;
  }

  try {
    const prompt = `
You are an AI resume parser for a cleaning company called Bloombrite Cleaning. Parse the following resume text and extract relevant information for a job application. 

IMPORTANT: Return ONLY valid JSON with no additional text, comments, or formatting.

Extract the following information and return it as JSON:
{
  "firstName": "First name (string)",
  "lastName": "Last name (string)", 
  "email": "Email address (string)",
  "phone": "Phone number (string)",
  "address": "Street address (string)",
  "city": "City (string)",
  "state": "State abbreviation (string)",
  "zipCode": "Zip code (string)",
  "experience": "Choose one: 'none', '1-2-years', '3-5-years', '5plus-years' based on total work experience",
  "previousCleaning": "Any cleaning, housekeeping, janitorial, or related experience mentioned (string, up to 500 chars)",
  "whyJoin": "Generate a brief professional statement about why they'd want to join our cleaning team based on their background (string, 100-200 chars)",
  "additionalInfo": "Any other relevant skills, certifications, or experience (string, up to 300 chars)"
}

Rules:
- If any field cannot be determined, use empty string ""
- For experience level, base it on total years of work experience mentioned
- For previousCleaning, look for housekeeping, cleaning, janitorial, maintenance, hospitality experience
- Keep whyJoin professional and relevant to cleaning services
- Phone numbers should be cleaned to just digits and dashes/parentheses
- State should be 2-letter abbreviation if possible

Resume text:
${resumeText}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a professional resume parser. Return only valid JSON with the exact structure requested. Do not include any explanations or additional text."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1, // Low temperature for consistent parsing
      max_tokens: 1000
    });

    const parsedData = JSON.parse(response.choices[0].message.content || '{}');
    
    // Validate required fields and structure
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'experience', 'previousCleaning', 'whyJoin', 'additionalInfo'];
    const validExperienceLevels = ['none', '1-2-years', '3-5-years', '5plus-years'];
    
    // Check if all required fields exist
    for (const field of requiredFields) {
      if (!(field in parsedData)) {
        console.error(`Missing field in parsed data: ${field}`);
        return null;
      }
    }

    // Validate experience level
    if (!validExperienceLevels.includes(parsedData.experience)) {
      parsedData.experience = 'none'; // Default fallback
    }

    // Clean and validate the data
    const cleanedData: ParsedResumeData = {
      firstName: String(parsedData.firstName || '').trim(),
      lastName: String(parsedData.lastName || '').trim(),
      email: String(parsedData.email || '').trim().toLowerCase(),
      phone: String(parsedData.phone || '').trim(),
      address: String(parsedData.address || '').trim(),
      city: String(parsedData.city || '').trim(),
      state: String(parsedData.state || '').trim().toUpperCase(),
      zipCode: String(parsedData.zipCode || '').trim(),
      experience: parsedData.experience,
      previousCleaning: String(parsedData.previousCleaning || '').trim().substring(0, 500),
      whyJoin: String(parsedData.whyJoin || '').trim().substring(0, 500),
      additionalInfo: String(parsedData.additionalInfo || '').trim().substring(0, 300)
    };

    return cleanedData;

  } catch (error) {
    console.error('Resume parsing error:', error);
    return null;
  }
};

export const extractTextFromPDF = async (pdfBuffer: Buffer): Promise<string> => {
  // For now, we'll return a placeholder - in production you'd use a PDF parsing library
  // like pdf-parse or pdf2pic + OCR
  try {
    // This is a simplified implementation - you'd want to use a proper PDF parser
    return "PDF text extraction not yet implemented. Please copy and paste your resume content.";
  } catch (error) {
    console.error('PDF extraction error:', error);
    return "";
  }
};