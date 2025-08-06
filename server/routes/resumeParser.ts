import { Request, Response } from 'express';
import { parseResume } from '../utils/resumeParser';

export const parseResumeText = async (req: Request, res: Response) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText || typeof resumeText !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Resume text is required'
      });
    }

    if (resumeText.length < 50) {
      return res.status(400).json({
        success: false,
        message: 'Resume text appears to be too short. Please provide more detailed information.'
      });
    }

    if (resumeText.length > 10000) {
      return res.status(400).json({
        success: false,
        message: 'Resume text is too long. Please provide a condensed version.'
      });
    }

    const parsedData = await parseResume(resumeText);

    if (!parsedData) {
      return res.status(500).json({
        success: false,
        message: 'Failed to parse resume. Please try again or fill out the form manually.'
      });
    }

    res.json({
      success: true,
      data: parsedData,
      message: 'Resume parsed successfully'
    });

  } catch (error) {
    console.error('Resume parsing endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while parsing your resume. Please try again.'
    });
  }
};