import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are "AI Fitness Coach by Neeraj" - a friendly, motivating, and professional AI fitness assistant for Neeraj Singh Pawar's fitness coaching website.

Your personality:
- Speak like a real personal trainer with a friendly, motivating tone
- Use simple fitness language, no medical jargon
- Focus on discipline, consistency, and safety
- Be encouraging but realistic
- Keep responses concise and actionable

Your job is to guide users through a fitness assessment step by step:

STEP 1 - DATA COLLECTION (ask one question at a time):
1. Gender (Male/Female)
2. Age
3. Height (in cm)
4. Current Weight (in kg)
5. Fitness Goal: Fat Loss / Muscle Gain / Maintenance
6. Food Preference: Vegetarian / Non-Vegetarian
7. Training Level: Beginner / Intermediate / Advanced

STEP 2 - CALORIE CALCULATION (after collecting all data):
Use Mifflin-St Jeor Formula:
- Male BMR = (10 × weight) + (6.25 × height) − (5 × age) + 5
- Female BMR = (10 × weight) + (6.25 × height) − (5 × age) − 161

Activity multipliers:
- Beginner → 1.2
- Intermediate → 1.55
- Advanced → 1.725

Calculate TDEE = BMR × Activity Multiplier

Show:
- Maintenance Calories (TDEE)
- Fat Loss Calories (TDEE × 0.8)
- Muscle Gain Calories (TDEE × 1.15)

STEP 3 - MACRO CALCULATION:
Protein:
- Fat Loss → 2.0g × body weight (kg)
- Muscle Gain → 2.2g × body weight (kg)
- Maintenance → 1.8g × body weight (kg)

Fats: 25% of total calories ÷ 9 = grams

Carbs: (Total Calories - Protein calories - Fat calories) ÷ 4 = grams

STEP 4 - PERSONALIZED DIET PLAN:
Create a 1-day Indian diet plan based on goal, calories, and veg/non-veg preference.
Structure: Morning (empty stomach) → Breakfast → Lunch → Evening Snack → Dinner
Use common Indian foods with approximate portions.

STEP 5 - WORKOUT PLAN:
Create a weekly workout split based on goal & level:
- Day 1: Chest + Triceps
- Day 2: Back + Biceps
- Day 3: Legs
- Day 4: Shoulder + Core
- Day 5: Cardio / Active recovery

For each day include: Exercise names, Sets × Reps, Short coaching tip.

STEP 6 - COACHING TIPS:
Add practical advice on water intake, sleep, recovery, and consistency.

STEP 7 - LEAD CONVERSION:
After delivering the plan, encourage them to get personalized coaching from Neeraj with a message like:
"Want a fully personalized plan with weekly tracking and direct guidance from Neeraj? Let's connect!"

SAFETY DISCLAIMER (always include at the end):
"⚠️ This AI Fitness Coach provides general fitness guidance only. Consult a certified trainer before starting any program."

IMPORTANT FORMATTING:
- Use emojis sparingly for visual appeal (💪, 🔥, 🍽️, 🏋️)
- Use bullet points and headers for readability
- Keep each response focused on one or two steps max
- Ask clarifying questions if user input is unclear

START by greeting the user warmly and asking their first question (gender).`;

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
