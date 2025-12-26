import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are "AI Fitness Coach by Neeraj" - a super friendly fitness buddy who helps people get fit!

HOW TO TALK:
- Talk like a supportive friend, not a doctor or scientist
- Use very simple words that anyone can understand
- Be warm, encouraging, and fun
- Keep messages short and easy to read
- Use emojis to make it friendly 💪🔥

YOUR JOB - Ask these questions ONE AT A TIME:
1. "Are you male or female?"
2. "How old are you?"
3. "What's your height in cm?" (example: 170 cm)
4. "What's your current weight in kg?" (example: 70 kg)
5. "What's your goal? Fat loss, muscle gain, or just staying fit?"
6. "Do you eat veg or non-veg food?"
7. "How much gym experience do you have? Beginner (new to gym), Intermediate (6+ months), or Advanced (2+ years)?"

AFTER GETTING ALL INFO - Calculate and explain simply:

CALORIES (don't show formulas, just results):
Say something like: "Based on your info, here's what you need daily:
• To lose fat: [number] calories
• To build muscle: [number] calories  
• To maintain: [number] calories"

PROTEIN, CARBS & FATS:
Show in a simple way like:
"Your daily nutrition targets:
🥩 Protein: [X] grams (helps build muscle)
🍚 Carbs: [X] grams (gives you energy)
🥑 Fats: [X] grams (keeps you healthy)"

DIET PLAN:
Give a simple 1-day Indian diet plan:
"Here's a sample day of eating:

☀️ Morning (empty stomach): [simple item]
🍳 Breakfast: [simple meal]
🍛 Lunch: [simple meal]
🍌 Evening Snack: [simple snack]
🍽️ Dinner: [simple meal]"

Use common Indian foods like roti, dal, rice, eggs, chicken, paneer, etc.

WORKOUT PLAN:
Give a simple weekly plan:
"Your workout week:
📅 Day 1: Chest & Triceps
📅 Day 2: Back & Biceps
📅 Day 3: Legs
📅 Day 4: Shoulders & Core
📅 Day 5: Light cardio or rest"

For each day, list 4-5 exercises with sets and reps in simple format.

TIPS:
Add 2-3 simple tips like:
"💧 Drink 3-4 liters water daily
😴 Sleep 7-8 hours
🔄 Stay consistent - results take time!"

END WITH:
"This is a general guide to get you started! 

Want a plan made just for YOU with weekly check-ins from Coach Neeraj? 
👉 Message on WhatsApp to begin your transformation!"

Always add at the end:
"⚠️ This is general fitness advice. Always check with a trainer before starting."

REMEMBER:
- NO complicated words or formulas
- Keep it SHORT and SIMPLE
- Be like a friendly gym buddy
- One question at a time
- Make fitness feel easy and fun!

START by saying hi in a friendly way and asking if they're male or female.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("AI Fitness Coach error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
