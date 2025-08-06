import OpenAI from 'openai';

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

interface ApplicationAnalysis {
  summary: string;
  fitAssessment: string;
  strengths: string[];
  concerns: string[];
  recommendation: 'highly_recommended' | 'recommended' | 'consider' | 'not_recommended';
  confidenceLevel: string;
}

export const analyzeJobApplication = async (applicationData: any): Promise<ApplicationAnalysis | null> => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key not configured');
    return null;
  }

  try {
    const experienceLabels: Record<string, string> = {
      'none': 'No professional experience',
      '1-2-years': '1-2 years',
      '3-5-years': '3-5 years',
      '5plus-years': '5+ years'
    };

    const availabilityLabels: Record<string, string> = {
      'full-time': 'Full-time (40+ hours/week)',
      'part-time': 'Part-time (20-30 hours/week)',
      'weekends': 'Weekends only',
      'flexible': 'Flexible schedule'
    };

    const prompt = `
You are an HR specialist analyzing job applications for Bloombrite Cleaning, a professional residential cleaning company in Metro Detroit. Analyze this application and provide insights on whether this candidate would be a good fit.

COMPANY CONTEXT:
- Bloombrite Cleaning specializes in residential cleaning services
- We serve Metro Detroit area (Wixom, Novi, West Bloomfield, etc.)
- Services include deep cleaning, move-in/out cleaning, maintenance cleaning
- We value reliability, attention to detail, and customer service
- Transportation is required as cleaners travel between client homes

APPLICATION DATA:
Name: ${applicationData.firstName} ${applicationData.lastName}
Location: ${applicationData.city}, ${applicationData.state} ${applicationData.zipCode}
Experience Level: ${experienceLabels[applicationData.experience] || applicationData.experience}
Availability: ${availabilityLabels[applicationData.availability] || applicationData.availability}
Transportation: ${applicationData.transportation ? 'Has reliable transportation' : 'No reliable transportation'}
Background Check: ${applicationData.backgroundCheck ? 'Can pass background check' : 'Cannot pass background check'}
Previous Cleaning Experience: ${applicationData.previousCleaning || 'None provided'}
Why They Want to Join: ${applicationData.whyJoin}
Additional Info: ${applicationData.additionalInfo || 'None provided'}
References: ${applicationData.references || 'None provided'}

IMPORTANT: Return ONLY valid JSON with no additional text, comments, or formatting.

Analyze and return JSON in this format:
{
  "summary": "2-3 sentence overview of the candidate",
  "fitAssessment": "Detailed assessment of how well they fit our cleaning company (3-4 sentences)",
  "strengths": ["strength1", "strength2", "strength3"],
  "concerns": ["concern1", "concern2"] (empty array if none),
  "recommendation": "highly_recommended|recommended|consider|not_recommended",
  "confidenceLevel": "High|Medium|Low confidence in this assessment"
}

Consider these factors:
- Location proximity to Metro Detroit service area
- Cleaning/hospitality/service experience
- Transportation availability (critical requirement)
- Background check eligibility (critical requirement)  
- Availability match with business needs
- Motivation and attitude from their responses
- Overall professionalism of application
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert HR specialist for a cleaning company. Provide thorough, professional analysis. Return only valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 1500
    });

    const analysis = JSON.parse(response.choices[0].message.content || '{}');
    
    // Validate the response structure
    const requiredFields = ['summary', 'fitAssessment', 'strengths', 'concerns', 'recommendation', 'confidenceLevel'];
    for (const field of requiredFields) {
      if (!(field in analysis)) {
        console.error(`Missing field in analysis: ${field}`);
        return null;
      }
    }

    // Validate recommendation values
    const validRecommendations = ['highly_recommended', 'recommended', 'consider', 'not_recommended'];
    if (!validRecommendations.includes(analysis.recommendation)) {
      analysis.recommendation = 'consider'; // Default fallback
    }

    return {
      summary: String(analysis.summary || '').trim(),
      fitAssessment: String(analysis.fitAssessment || '').trim(),
      strengths: Array.isArray(analysis.strengths) ? analysis.strengths.map((s: any) => String(s).trim()) : [],
      concerns: Array.isArray(analysis.concerns) ? analysis.concerns.map((c: any) => String(c).trim()) : [],
      recommendation: analysis.recommendation,
      confidenceLevel: String(analysis.confidenceLevel || 'Medium').trim()
    };

  } catch (error) {
    console.error('Application analysis error:', error);
    return null;
  }
};