import { Request, Response } from 'express';
import { sendEmail } from '../utils/sendgrid';

interface EmployeeApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  experience: string;
  previousCleaning?: string;
  availability: string;
  transportation: boolean;
  backgroundCheck: boolean;
  references?: string;
  whyJoin: string;
  additionalInfo?: string;
}

export const submitEmployeeApplication = async (req: Request, res: Response) => {
  try {
    const applicationData: EmployeeApplicationData = req.body;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'experience', 'availability', 'whyJoin'];
    
    for (const field of requiredFields) {
      if (!applicationData[field as keyof EmployeeApplicationData]) {
        return res.status(400).json({ 
          success: false, 
          message: `Missing required field: ${field}` 
        });
      }
    }

    // Format experience and availability for display
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

    // Create email content for HR
    const emailContent = `
      <h2>New Employee Application Received</h2>
      
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${applicationData.firstName} ${applicationData.lastName}</p>
      <p><strong>Email:</strong> ${applicationData.email}</p>
      <p><strong>Phone:</strong> ${applicationData.phone}</p>
      <p><strong>Address:</strong> ${applicationData.address}, ${applicationData.city}, ${applicationData.state} ${applicationData.zipCode}</p>
      
      <h3>Work Experience</h3>
      <p><strong>Cleaning Experience:</strong> ${experienceLabels[applicationData.experience] || applicationData.experience}</p>
      <p><strong>Availability:</strong> ${availabilityLabels[applicationData.availability] || applicationData.availability}</p>
      ${applicationData.previousCleaning ? `<p><strong>Previous Experience Details:</strong><br>${applicationData.previousCleaning.replace(/\n/g, '<br>')}</p>` : ''}
      
      <h3>Requirements</h3>
      <p><strong>Has Transportation:</strong> ${applicationData.transportation ? 'Yes' : 'No'}</p>
      <p><strong>Can Pass Background Check:</strong> ${applicationData.backgroundCheck ? 'Yes' : 'No'}</p>
      
      <h3>Why They Want to Join</h3>
      <p>${applicationData.whyJoin.replace(/\n/g, '<br>')}</p>
      
      ${applicationData.references ? `<h3>References</h3><p>${applicationData.references.replace(/\n/g, '<br>')}</p>` : ''}
      
      ${applicationData.additionalInfo ? `<h3>Additional Information</h3><p>${applicationData.additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
      
      <hr>
      <p><em>Application submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</em></p>
    `;

    // Send email to HR
    const emailSent = await sendEmail({
      to: 'hr@bloombritecleaning.com', // HR email
      from: 'noreply@bloombritecleaning.com',
      subject: `New Employee Application: ${applicationData.firstName} ${applicationData.lastName}`,
      html: emailContent,
      text: emailContent.replace(/<[^>]*>/g, '') // Plain text version
    });

    if (emailSent) {
      // Send confirmation email to applicant
      const confirmationEmailContent = `
        <h2>Thank You for Your Application!</h2>
        
        <p>Dear ${applicationData.firstName},</p>
        
        <p>Thank you for your interest in joining the Bloombrite Cleaning team! We have received your application and our HR team will review it within the next 24-48 hours.</p>
        
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Position Interest:</strong> Cleaning Team Member</li>
          <li><strong>Experience Level:</strong> ${experienceLabels[applicationData.experience] || applicationData.experience}</li>
          <li><strong>Availability:</strong> ${availabilityLabels[applicationData.availability] || applicationData.availability}</li>
        </ul>
        
        <p>If you have any questions or need to update your application, please don't hesitate to contact us at:</p>
        <ul>
          <li><strong>Phone:</strong> (947) 465-4217</li>
          <li><strong>Email:</strong> hr@bloombritecleaning.com</li>
        </ul>
        
        <p>We look forward to potentially welcoming you to our team!</p>
        
        <p>Best regards,<br>
        The Bloombrite Cleaning Team</p>
      `;

      await sendEmail({
        to: applicationData.email,
        from: 'hr@bloombritecleaning.com',
        subject: 'Application Received - Bloombrite Cleaning',
        html: confirmationEmailContent,
        text: confirmationEmailContent.replace(/<[^>]*>/g, '')
      });

      res.json({ 
        success: true, 
        message: 'Application submitted successfully. You should receive a confirmation email shortly.' 
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Employee application submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit application. Please try again or contact us directly.' 
    });
  }
};