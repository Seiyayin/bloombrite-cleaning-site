interface DiscordWebhookPayload {
  content?: string;
  embeds?: DiscordEmbed[];
}

interface DiscordEmbed {
  title?: string;
  description?: string;
  color?: number;
  fields?: DiscordField[];
  footer?: {
    text: string;
  };
  timestamp?: string;
}

interface DiscordField {
  name: string;
  value: string;
  inline?: boolean;
}

export const sendDiscordNotification = async (webhookUrl: string, payload: DiscordWebhookPayload): Promise<boolean> => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (error) {
    console.error('Discord webhook error:', error);
    return false;
  }
};

export const createEmployeeApplicationDiscordEmbed = (applicationData: any, analysis?: any): DiscordEmbed => {
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

  const fields: DiscordField[] = [
    {
      name: "👤 Personal Info",
      value: `**Name:** ${applicationData.firstName} ${applicationData.lastName}\n**Email:** ${applicationData.email}\n**Phone:** ${applicationData.phone}`,
      inline: true
    },
    {
      name: "📍 Location",
      value: `${applicationData.address}\n${applicationData.city}, ${applicationData.state} ${applicationData.zipCode}`,
      inline: true
    },
    {
      name: "💼 Experience",
      value: experienceLabels[applicationData.experience] || applicationData.experience,
      inline: true
    },
    {
      name: "🕒 Availability",
      value: availabilityLabels[applicationData.availability] || applicationData.availability,
      inline: true
    },
    {
      name: "🚗 Transportation",
      value: applicationData.transportation ? "✅ Yes" : "❌ No",
      inline: true
    },
    {
      name: "🔍 Background Check",
      value: applicationData.backgroundCheck ? "✅ Can pass" : "❌ Cannot pass",
      inline: true
    }
  ];

  if (applicationData.previousCleaning) {
    fields.push({
      name: "🧽 Previous Cleaning Experience",
      value: applicationData.previousCleaning.length > 1000 
        ? applicationData.previousCleaning.substring(0, 1000) + "..."
        : applicationData.previousCleaning,
      inline: false
    });
  }

  fields.push({
    name: "💭 Why They Want to Join",
    value: applicationData.whyJoin.length > 1000 
      ? applicationData.whyJoin.substring(0, 1000) + "..."
      : applicationData.whyJoin,
    inline: false
  });

  if (applicationData.references) {
    fields.push({
      name: "📋 References",
      value: applicationData.references.length > 500 
        ? applicationData.references.substring(0, 500) + "..."
        : applicationData.references,
      inline: false
    });
  }

  if (applicationData.additionalInfo) {
    fields.push({
      name: "ℹ️ Additional Information",
      value: applicationData.additionalInfo.length > 500 
        ? applicationData.additionalInfo.substring(0, 500) + "..."
        : applicationData.additionalInfo,
      inline: false
    });
  }

  // Add AI analysis if available
  if (analysis) {
    const recommendationEmoji = {
      'highly_recommended': '🟢',
      'recommended': '🟡', 
      'consider': '🟠',
      'not_recommended': '🔴'
    };

    fields.push({
      name: "🤖 AI Analysis Summary",
      value: analysis.summary,
      inline: false
    });

    fields.push({
      name: "📊 Fit Assessment",
      value: analysis.fitAssessment,
      inline: false
    });

    if (analysis.strengths && analysis.strengths.length > 0) {
      fields.push({
        name: "✅ Strengths",
        value: analysis.strengths.map((s: string) => `• ${s}`).join('\n'),
        inline: true
      });
    }

    if (analysis.concerns && analysis.concerns.length > 0) {
      fields.push({
        name: "⚠️ Concerns",
        value: analysis.concerns.map((c: string) => `• ${c}`).join('\n'),
        inline: true
      });
    }

    fields.push({
      name: "🎯 Recommendation",
      value: `${recommendationEmoji[analysis.recommendation as keyof typeof recommendationEmoji] || '🟡'} **${analysis.recommendation.replace('_', ' ').toUpperCase()}**\n*Confidence: ${analysis.confidenceLevel}*`,
      inline: false
    });
  }

  return {
    title: "🆕 New Job Application Received!",
    description: `New application from **${applicationData.firstName} ${applicationData.lastName}** for a cleaning position.`,
    color: analysis && analysis.recommendation === 'highly_recommended' ? 0x00FF00 : 
           analysis && analysis.recommendation === 'not_recommended' ? 0xFF0000 : 0xFF6B35,
    fields: fields,
    footer: {
      text: "Bloombrite Cleaning HR System with AI Analysis"
    },
    timestamp: new Date().toISOString()
  };
};