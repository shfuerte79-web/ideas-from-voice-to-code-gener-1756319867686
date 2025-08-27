import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Activated Style Guide Generator",
    "one_liner": "Create coding style guides from conversational prompts to ensure team consistency.",
    "why_now": "As remote teams grow, maintaining a consistent coding style is critical.",
    "novel_mechanism": "Utilizes NLP to understand and convert verbal instructions into comprehensive style guides.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Speech"
    ],
    "edge_use_cases": [
      "Generate guidelines for specific languages",
      "Tailor guides based on team feedback"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command processing",
        "Template generation",
        "Sharing capabilities"
      ],
      "tools": [
        "Next.js",
        "PostgreSQL",
        "Twilio for voice"
      ],
      "data_bootstrap": [
        "Collect existing guides",
        "Generate examples using LLM"
      ],
      "risk": [
        "Low user adoption",
        "Overly complex instructions"
      ],
      "mitigation": [
        "User testing for prompts",
        "Simplified voice guidance"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Real-time demo of guide creation",
        "Before/after style comparisons"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Dev.to"
      ],
      "pricing": {
        "free": "Basic templates",
        "pro": "$19/month for custom guides",
        "business": "$49/month for team access"
      }
    },
    "moat": [
      "Strong community resources",
      "Custom guide features",
      "Scalable model for enterprise solutions"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Fills a niche in automated documentation with conversations, avoiding redundancy in existing tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}